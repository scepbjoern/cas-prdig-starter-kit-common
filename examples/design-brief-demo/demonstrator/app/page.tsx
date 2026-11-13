"use client";
import {useState} from "react";
const initial=[
 {id:"BAN-1001",supplier:"Musterhandel Nord",amount:"1’240.00",date:"20.11.2026",status:"Offen"},
 {id:"BAN-1002",supplier:"Beispieltechnik AG",amount:"680.00",date:"23.11.2026",status:"In Prüfung"},
 {id:"BAN-1003",supplier:"Fiktivbedarf Süd",amount:"2’090.00",date:"27.11.2026",status:"Offen"}
];
export default function Page(){
 const [orders,setOrders]=useState(initial),[selected,setSelected]=useState("BAN-1001"),[message,setMessage]=useState("");
 const order=orders.find(o=>o.id===selected)!;
 return <><header><strong>Auenwerk · Einkauf</strong><span>Synthetische Unterrichtsdemo</span></header><main>
 <nav aria-label="Bereich">Einkauf / Bestellanforderungen</nav><h1>Bestellanforderungen</h1>
 <div className="toolbar"><strong>Arbeitsvorrat</strong><span>3 Anforderungen · Beträge in CHF</span></div>
 <div className="table-scroll"><table><caption>Fiktive Bestellanforderungen</caption><thead><tr><th>Auswahl</th><th>Nummer</th><th>Lieferant</th><th className="number">Betrag CHF</th><th>Termin</th><th>Status</th></tr></thead>
 <tbody>{orders.map(o=><tr key={o.id} className={selected===o.id?"selected":""}><td><input aria-label={o.id+" auswählen"} type="radio" name="order" checked={selected===o.id} onChange={()=>{setSelected(o.id);setMessage("")}}/></td><th scope="row">{o.id}</th><td>{o.supplier}</td><td className="number">{o.amount}</td><td>{o.date}</td><td><span className={o.status==="Freigegeben"?"status approved":"status"}>{o.status}</span></td></tr>)}</tbody></table></div>
 <section className="actions" aria-label="Aktionen"><button disabled={order.status==="Freigegeben"} onClick={()=>{setOrders(orders.map(o=>o.id===selected?{...o,status:"Freigegeben"}:o));setMessage(selected+" wurde freigegeben.")}}>Freigeben</button><span>{selected} ausgewählt</span></section>
 <p role="status" className="feedback">{message||"Wählt eine Anforderung aus, um die Freigabe zu demonstrieren."}</p>
 <aside>Nur fiktive Daten. Änderungen gelten für diese Ansicht und werden beim Neuladen zurückgesetzt. Keine echte ERP- oder Portal-Anbindung.</aside>
 </main></>;
}
