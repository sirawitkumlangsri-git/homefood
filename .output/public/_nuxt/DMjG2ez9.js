import a from"./BVnK6gvh.js";import{_ as n,r as c,o as i,J as l,A as f,t as d,x as o}from"./BCSbTyMP.js";import"./BYMQO4p4.js";import".prisma/client/index-browser";const u={__name:"index",setup(m){const t=c([]),r=async()=>{try{const e=await fetch("/api/admin/users",{method:"GET"});if(!e.ok)throw new Error("Failed to fetch users");t.value=await e.json()}catch(e){console.error("Error fetching users:",e)}};return i(async()=>{await r(),console.log("user: ",t.value)}),(e,s)=>(d(),l(a,null,{default:f(()=>s[0]||(s[0]=[o("div",{class:"flex justify-center items-center bg-[#FF8128] w-full h-20 shadow-md rounded-full mt-1 bg-opacity-60"},[o("h2",{class:"sm:text-6xl text-4xl font-bold text-[#fefeff] text-stroke tracking-wide"},"DASHBOARD")],-1)])),_:1}))}},w=n(u,[["__scopeId","data-v-8b364835"]]);export{w as default};
