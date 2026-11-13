import {test,expect} from "@playwright/test";
test("Design-Demo: Auswahl und Freigabe mit sichtbarem Ergebnis",async({page})=>{
 await page.setViewportSize({width:1280,height:800});await page.goto("/");
 await expect(page.getByRole("heading",{name:"Bestellanforderungen"})).toBeVisible();
 await page.getByRole("radio",{name:"BAN-1003 auswählen"}).check();
 await page.getByRole("button",{name:"Freigeben",exact:true}).click();
 await expect(page.getByRole("status")).toHaveText("BAN-1003 wurde freigegeben.");
 await expect(page.getByRole("row").filter({hasText:"BAN-1003"})).toContainText("Freigegeben");
 await expect(page.getByRole("row").filter({hasText:"BAN-1001"})).toContainText("Offen");
 await expect(page.getByRole("button",{name:"Freigeben",exact:true})).toBeDisabled();
 await page.screenshot({path:"output/playwright/design-demo-desktop.png",fullPage:true});
 await page.setViewportSize({width:390,height:844});
 await expect(page.getByRole("heading",{name:"Bestellanforderungen"})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBeTruthy();
 await page.screenshot({path:"output/playwright/design-demo-mobile.png",fullPage:true});
});
