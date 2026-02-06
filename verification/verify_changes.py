import time
from playwright.sync_api import sync_playwright

def verify(page):
    try:
        page.goto("http://localhost:3000", timeout=10000)
    except Exception as e:
        print(f"Failed to load page: {e}")
        return

    # 1. Check Favicon
    # Next.js might resolve /favicon.png to something else or keep it as is.
    print("Checking favicon...")
    icon_link = page.locator('link[rel="icon"]')
    count = icon_link.count()
    found = False
    for i in range(count):
        href = icon_link.nth(i).get_attribute("href")
        print(f"Found icon link: {href}")
        if "favicon.png" in href:
            found = True

    if found:
        print("✅ Favicon link pointing to png found.")
    else:
        print("❌ Favicon link pointing to png NOT found.")

    # 2. Check Canonical Tag
    print("Checking canonical tag...")
    canonical = page.locator('link[rel="canonical"]')
    if canonical.count() == 0:
        print("✅ Canonical tag NOT found (as expected).")
    else:
        print(f"❌ Canonical tag FOUND: {canonical.get_attribute('href')}")

    # 3. Check 3D Scene
    print("Checking Scene...")
    # Scene.tsx renders a div with specific classes
    # <div className="fixed inset-0 -z-10 bg-[#080808]">
    # Since we lazy loaded it, it might take a tick, but page.goto waits for load.
    canvas_container = page.locator('div.fixed.inset-0.-z-10')
    if canvas_container.count() > 0:
         print("✅ Scene container found.")
    else:
         print("❌ Scene container NOT found.")

    # Wait for things to settle
    time.sleep(2)
    page.screenshot(path="verification/verification.png")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    try:
        verify(page)
    except Exception as e:
        print(f"Error: {e}")
    finally:
        browser.close()
