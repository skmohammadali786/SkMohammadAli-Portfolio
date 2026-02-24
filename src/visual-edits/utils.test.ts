import { expect, test, describe, beforeAll } from "bun:test";
import { isTextEditable, parseOrchidsId, wrapMultiline } from "./utils";

// Mocking the global Node and HTMLElement for the tests
beforeAll(() => {
  if (typeof (global as any).Node === 'undefined') {
    (global as any).Node = {
      ELEMENT_NODE: 1,
      TEXT_NODE: 3,
    };
  }
});

class MockNode {
  nodeType: number;
  textContent: string | null;
  childNodes: MockNode[] = [];
  constructor(nodeType: number, textContent: string | null = null) {
    this.nodeType = nodeType;
    this.textContent = textContent;
  }
}

class MockHTMLElement extends MockNode {
  tagName: string;
  contentEditable: string = "inherit";
  childElementCount: number = 0;

  constructor(tagName: string, textContent: string | null = null) {
    super(1, textContent);
    this.tagName = tagName.toUpperCase();
  }

  getAttribute(name: string) {
    if (name === 'contenteditable') return this.contentEditable;
    return null;
  }
}

describe("isTextEditable", () => {
  test("should return true for input and textarea", () => {
    const input = new MockHTMLElement("input") as unknown as HTMLElement;
    const textarea = new MockHTMLElement("textarea") as unknown as HTMLElement;
    expect(isTextEditable(input)).toBe(true);
    expect(isTextEditable(textarea)).toBe(true);
  });

  test("should return true for elements with contentEditable='true'", () => {
    const div = new MockHTMLElement("div") as unknown as HTMLElement;
    div.contentEditable = "true";
    expect(isTextEditable(div)).toBe(true);
  });

  test("should return true for basic editable tags with text", () => {
    const p = new MockHTMLElement("p", "Hello world") as unknown as HTMLElement;
    expect(isTextEditable(p)).toBe(true);

    const h1 = new MockHTMLElement("h1", "Title") as unknown as HTMLElement;
    expect(isTextEditable(h1)).toBe(true);

    const span = new MockHTMLElement("span", "text") as unknown as HTMLElement;
    expect(isTextEditable(span)).toBe(true);
  });

  test("should return false for editable tags without text", () => {
    const p = new MockHTMLElement("p", "") as unknown as HTMLElement;
    expect(isTextEditable(p)).toBe(false);

    const div = new MockHTMLElement("div", "   ") as unknown as HTMLElement;
    expect(isTextEditable(div)).toBe(false);
  });

  test("should return true for element with 1 child and direct text content", () => {
    const div = new MockHTMLElement("div", "Direct text") as unknown as any;
    div.childElementCount = 1;
    // Mock childNodes to include a text node
    const textNode = new MockNode(3, "Direct text");
    const spanNode = new MockHTMLElement("span", "child");
    div.childNodes = [textNode, spanNode];

    expect(isTextEditable(div as HTMLElement)).toBe(true);
  });

  test("should return false for element with 1 child but NO direct text content", () => {
    const div = new MockHTMLElement("div", "Child text") as unknown as any;
    div.childElementCount = 1;
    // textContent might be "Child text" because of the child, but hasDirectText should be false
    const spanNode = new MockHTMLElement("span", "Child text");
    div.childNodes = [spanNode];

    expect(isTextEditable(div as HTMLElement)).toBe(false);
  });

  test("should return false for element with more than 1 child", () => {
    const div = new MockHTMLElement("div", "text") as unknown as any;
    div.childElementCount = 2;
    const textNode = new MockNode(3, "text");
    const span1 = new MockHTMLElement("span", "1");
    const span2 = new MockHTMLElement("span", "2");
    div.childNodes = [textNode, span1, span2];

    expect(isTextEditable(div as HTMLElement)).toBe(false);
  });

  test("should return false for non-editable tags", () => {
    const section = new MockHTMLElement("section", "text") as unknown as HTMLElement;
    expect(isTextEditable(section)).toBe(false);

    const main = new MockHTMLElement("main", "text") as unknown as HTMLElement;
    expect(isTextEditable(main)).toBe(false);
  });
});

describe("parseOrchidsId", () => {
  test("should parse a valid orchids id", () => {
    const id = "src/app/page.tsx:10:5";
    const result = parseOrchidsId(id);
    expect(result).toEqual({
      filePath: "src/app/page.tsx",
      line: 10,
      column: 5,
    });
  });

  test("should handle file paths with colons", () => {
    const id = "C:/Users/name/project/file.tsx:20:30";
    const result = parseOrchidsId(id);
    expect(result).toEqual({
      filePath: "C:/Users/name/project/file.tsx",
      line: 20,
      column: 30,
    });
  });

  test("should return null for invalid orchids id", () => {
    expect(parseOrchidsId("invalid")).toBeNull();
    expect(parseOrchidsId("file:line")).toBeNull();
    expect(parseOrchidsId("file:notanumber:notanumber")).toBeNull();
  });
});

describe("wrapMultiline", () => {
  test("should wrap text with line breaks in template literal", () => {
    const text = "Hello\nWorld";
    expect(wrapMultiline(text)).toBe("{`Hello\\nWorld`}");
  });

  test("should not wrap single line text", () => {
    const text = "Hello World";
    expect(wrapMultiline(text)).toBe("Hello World");
  });
});
