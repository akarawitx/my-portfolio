# My Portfolio — Akarawit Juntarang

เว็บไซต์ผลงานส่วนตัว (Personal Portfolio) พัฒนาด้วย **Vue 3** + **Vite** + **Vue Router** นำเสนอข้อมูลส่วนตัว ทักษะ ผลงาน และช่องทางติดต่อ ในรูปแบบ Single Page Application (SPA)

---

## 🧱 เทคโนโลยีที่ใช้

| ส่วน | เทคโนโลยี |
|---|---|
| Framework | Vue 3 (Composition API + `<script setup>`) |
| Build Tool | Vite |
| Routing | Vue Router 4 (`createWebHistory`) |
| ส่งอีเมลจากฟอร์ม | EmailJS (`@emailjs/browser`) |
| ฟอนต์ | Google Fonts — Syne (หัวข้อ) / DM Sans (เนื้อหา) |
| Icon | SVG inline + Icons8 (สำหรับ Skills) |

---

## 📁 โครงสร้างโปรเจกต์

```
src/
├── App.vue                 # Root component — ครอบ <RouterView /> และ global CSS variables
├── main.js                 # จุดเริ่มต้นแอป — สร้าง Vue app และติดตั้ง router
├── router/
│   └── index.js             # กำหนดเส้นทาง (routes) ทั้งหมดของเว็บไซต์
├── assets/                  # รูปภาพ โลโก้ และรูปผลงานแต่ละโปรเจกต์
├── components/               # Component ที่ใช้ประกอบหน้าเว็บ (นำกลับมาใช้ซ้ำได้)
│   ├── Header.vue            # แถบนำทางด้านบน (Navbar)
│   ├── Footer.vue            # ส่วนท้ายเว็บไซต์
│   ├── HeroSection.vue        # ส่วน Hero หน้าแรก (รูป + ข้อความแนะนำตัว)
│   ├── AboutSection.vue       # ส่วนแนะนำตัวเอง + ปุ่มดาวน์โหลด Resume
│   ├── SkillsSection.vue      # แสดงไอคอนทักษะ/เทคโนโลยีที่ถนัด
│   └── ProjectsSection.vue    # แสดงรายการผลงาน พร้อม Modal ดูรูปขยาย
└── pages/                    # Component ระดับ "หน้า" ที่ผูกกับ route
    ├── HomePage.vue           # หน้าแรก — รวม Hero, About, Skills, Projects (preview)
    ├── ProjectPage.vue        # หน้ารวมผลงานทั้งหมด
    └── ContactPage.vue        # หน้าติดต่อ พร้อมฟอร์มส่งข้อความ
```

---

## 🧭 ระบบ Routing (`router/index.js`)

ใช้ Vue Router แบบ `history` mode (URL ไม่มี `#`) กำหนดเส้นทางไว้ 3 หน้า:

| Path | หน้า | คำอธิบาย |
|---|---|---|
| `/` | `HomePage.vue` | หน้าแรก |
| `/projects` | `ProjectPage.vue` | หน้ารวมผลงานทั้งหมด |
| `/contact` | `ContactPage.vue` | หน้าติดต่อ |

มีการปรับแต่ง `scrollBehavior` ให้เลื่อนไปยัง section ที่มี `hash` (เช่น `/#about`) แบบ smooth scroll พร้อม delay เล็กน้อยเพื่อรอ DOM render เสร็จก่อน

---

## 🧩 อธิบายแต่ละ Component

### `App.vue`
ไฟล์รากของแอป มีหน้าที่:
- ครอบ `<RouterView />` เพื่อแสดงผลหน้าตาม route ปัจจุบัน
- ประกาศ **CSS Variables** ส่วนกลาง (`--accent`, `--bg-deep`, `--font-display` ฯลฯ) ที่ทุก component เรียกใช้ร่วมกัน ทำให้ปรับธีมสีทั้งเว็บได้จากจุดเดียว
- Import ฟอนต์ Syne และ DM Sans จาก Google Fonts
- ตั้งค่า global style พื้นฐาน เช่น scrollbar, selection color, section padding

### `HeaderPage` / `Header.vue`
Navbar แบบ fixed อยู่บนสุดของทุกหน้า:
- เปลี่ยนพื้นหลังเป็นแบบทึบ + blur เมื่อ scroll ผ่าน 40px (ใช้ `isScrolled`)
- Desktop แสดงเมนูแนวนอน, มือถือ (≤768px) จะซ่อนเมนูแล้วแสดงปุ่ม Hamburger แทน พร้อม drawer เมนูแบบเลื่อนลง

### `HeroSection.vue`
ส่วนแรกของหน้า Home:
- รูปโปรไฟล์ (`avatar.png`) พร้อม fallback เป็น SVG วาดมือ ถ้าโหลดรูปไม่สำเร็จ (`onerror`)
- ข้อความแนะนำตัวแบบ "พูดฟองข้อความ" (greeting bubble) พร้อมลูกศรชี้
- Headline หลักของเว็บไซต์

### `AboutSection.vue`
ข้อความแนะนำตัวสั้นๆ + ปุ่มดาวน์โหลดเรซูเม่ (ลิงก์ไปยังไฟล์ `Akarawit_Resume.pdf` ใน public)

### `SkillsSection.vue`
แสดงไอคอนภาษาโปรแกรมมิ่ง/เทคโนโลยีที่ใช้เป็น 2 แถว โดยดึงไอคอนจาก Icons8 ผ่าน URL ตรง (ไม่ได้เก็บไฟล์ไว้ในโปรเจกต์)

### `ProjectsSection.vue`
Component ที่ซับซ้อนที่สุด ใช้ร่วมกันทั้งใน `HomePage` (โหมด preview แสดงแค่ 2 โปรเจกต์) และ `ProjectPage` (โหมดเต็มแสดงทั้งหมด) ผ่าน prop `preview`:
- เก็บข้อมูลโปรเจกต์ทั้งหมดไว้ใน array `allProjects` (ชื่อ, คำอธิบาย, ลิงก์ GitHub/Live, รูปภาพ)
- แสดงผลแบบสลับซ้าย-ขวา (`reverse`) ในแต่ละแถว
- มีระบบ **Image Modal** ในตัว: คลิกรูป → เปิด modal ดูรูปขยาย รองรับ
  - เลื่อนซ้าย/ขวาดูรูปอื่นในโปรเจกต์เดียวกัน (thumbnail strip)
  - Zoom ด้วย scroll wheel / ปุ่ม +− / pinch บนมือถือ
  - Pan (ลากรูป) ด้วยเมาส์หรือนิ้ว

### `Footer.vue`
ส่วนท้ายเว็บไซต์ ประกอบด้วยโลโก้ + คำโปรย, เมนูนำทางซ้ำ, ข้อมูลติดต่อ (อีเมล/เบอร์โทร/โซเชียล) และบรรทัด copyright ที่ดึงปีปัจจุบันอัตโนมัติ

### `ContactPage.vue`
หน้าติดต่อ แบ่งเป็น 2 ฝั่ง:
- **ฝั่งซ้าย**: ข้อมูลติดต่อ (อีเมล, เบอร์โทร, โซเชียลลิงก์)
- **ฝั่งขวา**: ฟอร์มติดต่อ (ชื่อ, อีเมล, หัวข้อ, ข้อความ) ที่ส่งข้อมูลผ่าน **EmailJS** โดยตรงจาก frontend (ไม่ต้องมี backend)
  - ใช้ environment variables 3 ตัว: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
  - มี state `submitting` (แสดง loading), `sent` (แสดงหน้าขอบคุณหลังส่งสำเร็จ), `errorMsg` (แสดง error ถ้าส่งไม่สำเร็จ)

### `ProjectPage.vue`
หน้ารวมผลงานทั้งหมด — เรียกใช้ `ProjectsSection` แบบ `:preview="false"` เพื่อแสดงทุกโปรเจกต์

### `HomePage.vue`
หน้าแรกของเว็บไซต์ ประกอบร่าง component ต่างๆ ตามลำดับ:
`Header → HeroSection → AboutSection → SkillsSection → ProjectsSection (preview) → ปุ่ม "View All Projects" → Footer`

---

## 🎨 ระบบธีมสี (Design Tokens)

กำหนดไว้ที่ `:root` ใน `App.vue` ทุก component เรียกใช้ผ่าน CSS variable แทนการ hardcode สี ทำให้เปลี่ยนธีมทั้งเว็บได้จากจุดเดียว:

```css
--bg-deep       พื้นหลังหลัก (เกือบดำ)
--bg-card       พื้นหลังการ์ด
--accent        สีม่วงหลักของธีม
--accent-glow   เงาเรืองแสงสีม่วง
--text-primary  สีตัวอักษรหลัก
--text-muted    สีตัวอักษรรอง
--border        สีเส้นขอบ
--font-display  ฟอนต์หัวข้อ (Syne)
--font-body     ฟอนต์เนื้อหา (DM Sans)
```

---

## ⚙️ การติดตั้งและรัน

```bash
npm install
npm run dev
```

สร้างไฟล์ `.env` ที่ root โปรเจกต์สำหรับ EmailJS:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

⚠️ **ข้อสังเกต**: ใน `ContactPage.vue` มี `console.log` ที่พิมพ์ค่า Service ID, Template ID และ Public Key ออกมาตอน submit ฟอร์ม — ควรลบออกก่อน deploy จริงเพื่อไม่ให้ค่าตั้งค่าเหล่านี้ไปปรากฏใน console ของผู้ใช้โดยไม่จำเป็น (แม้ public key จะถูกออกแบบให้เปิดเผยได้ แต่ก็ไม่จำเป็นต้อง log ออกมา)

---

## 📌 สรุปแนวคิดโดยรวม

โปรเจกต์นี้เป็น **Portfolio SPA** ที่ออกแบบให้:
- แยก "หน้า" (`pages/`) กับ "ชิ้นส่วน UI ที่ใช้ซ้ำ" (`components/`) ออกจากกันชัดเจน
- ใช้ CSS Variables ควบคุมธีมสีจากจุดเดียว ทำให้ปรับ Dark/Purple theme ได้ง่าย
- `ProjectsSection` ถูกออกแบบให้ใช้ซ้ำได้ทั้งในโหมด preview และโหมดเต็ม ลดโค้ดซ้ำซ้อน
- ฟอร์มติดต่อทำงานแบบ Serverless ผ่าน EmailJS โดยไม่ต้องมี backend ของตัวเอง