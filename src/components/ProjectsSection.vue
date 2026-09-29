<!-- src/components/ProjectsSection.vue -->
<template>
  <section class="projects" id="projects">
    <div class="container">
      <!-- ───────── หัวข้อ ───────── -->
      <div class="projects-head">
        <p class="eyebrow">03 · ผลงาน</p>
        <h2 class="projects-title"><span class="mark">ผลงานและโปรเจกต์</span></h2>
        <p class="projects-sub">
          รวมโปรเจกต์ทั้งงานพัฒนาระบบและงานออกแบบ UX/UI คลิกที่การ์ดเพื่อดูภาพหน้าจอและรายละเอียดทั้งหมด
        </p>
      </div>

      <!-- ───────── ตัวกรอง ───────── -->
      <div class="filters" role="group" aria-label="กรองประเภทผลงาน">
        <button v-for="f in filters" :key="f.id" type="button" class="filter" :class="{ active: filter === f.id }"
          :aria-pressed="filter === f.id" @click="filter = f.id">
          {{ f.label }}
          <span class="filter-count">{{ f.count }}</span>
        </button>
      </div>

      <!-- ───────── การ์ดโปรเจกต์ ───────── -->
      <div class="grid">
        <article v-for="p in visible" :key="p.id" class="card">
          <div class="thumb" :class="{ 'thumb--phone': p.device === 'mobile' }" @click="openProject(p)">
            <img :src="coverOf(p).src" :alt="`ภาพหน้าจอโปรเจกต์ ${p.title}`" loading="lazy" />
            <span class="count">{{ p.images.length }} ภาพ</span>
          </div>

          <div class="card-body">
            <div class="meta">
              <span class="cat">{{ catLabel[p.category] }}</span>
              <span v-if="p.badge" class="badge" :class="p.badge.tone">{{ p.badge.text }}</span>
            </div>

            <h3 class="card-title">{{ p.title }}</h3>
            <p class="card-sum">{{ p.summary }}</p>

            <ul class="chips">
              <li v-for="t in p.tech.slice(0, 4)" :key="t">{{ t }}</li>
              <li v-if="p.tech.length > 4" class="more">+{{ p.tech.length - 4 }}</li>
            </ul>

            <div class="card-foot">
              <button type="button" class="btn btn--primary" @click="openProject(p)">ดูรายละเอียด</button>
              <div class="icon-links">
                <a v-for="l in linksOf(p)" :key="l.key" :href="l.url" target="_blank" rel="noopener" class="icon-btn"
                  :aria-label="l.label" :title="l.label">
                  <svg width="18" height="18" viewBox="0 0 24 24" :fill="l.fill ? 'currentColor' : 'none'"
                    :stroke="l.fill ? 'none' : 'currentColor'" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" aria-hidden="true">
                    <path :d="l.path" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ───────── หน้าต่างรายละเอียด ───────── -->
  <Teleport to="body">
    <div v-if="active" class="modal" @click.self="closeModal">
      <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="pj-title">
        <button ref="closeBtn" type="button" class="close" aria-label="ปิดหน้าต่าง" @click="closeModal">✕</button>

        <!-- ซ้าย: แกลเลอรี -->
        <div class="gallery">
          <div class="viewer" @wheel.prevent="onWheel" @mousedown="onMouseDown" @mousemove="onMouseMove"
            @mouseup="onPointerEnd" @mouseleave="onPointerEnd" @touchstart.prevent="onTouchStart"
            @touchmove.prevent="onTouchMove" @touchend="onPointerEnd">
            <img :src="current.src" :alt="current.alt" class="viewer-img"
              :class="{ dragging: isDragging, pannable: zoom > 1 }"
              :style="{ transform: `translate(${panX}px, ${panY}px) scale(${zoom})` }" draggable="false" />

            <span v-if="multi" class="counter">{{ index + 1 }} / {{ active.images.length }}</span>
            <button v-if="multi" type="button" class="nav prev" aria-label="ภาพก่อนหน้า" @click="prevImage">‹</button>
            <button v-if="multi" type="button" class="nav next" aria-label="ภาพถัดไป" @click="nextImage">›</button>
          </div>

          <div class="tools">
            <span class="caption">{{ current.alt }}</span>
            <div class="zoom">
              <button type="button" aria-label="ซูมออก" @click="zoomOut">－</button>
              <span>{{ Math.round(zoom * 100) }}%</span>
              <button type="button" aria-label="ซูมเข้า" @click="zoomIn">＋</button>
              <button type="button" @click="resetZoom">รีเซ็ต</button>
            </div>
          </div>

          <div v-if="multi" class="thumbs">
            <button v-for="(im, i) in active.images" :key="i" type="button" class="thumb-btn"
              :class="{ on: i === index }" :aria-label="`ดูภาพที่ ${i + 1}: ${im.alt}`"
              :aria-current="i === index ? 'true' : undefined" @click="goTo(i)">
              <img :src="im.src" alt="" loading="lazy" />
            </button>
          </div>
        </div>

        <!-- ขวา: รายละเอียด -->
        <div class="info">
          <div class="meta">
            <span class="cat">{{ catLabel[active.category] }}</span>
            <span v-if="active.badge" class="badge" :class="active.badge.tone">{{ active.badge.text }}</span>
          </div>
          <h3 id="pj-title" class="info-title">{{ active.title }}</h3>
          <p class="info-desc">{{ active.desc }}</p>

          <h4 class="info-h">เทคโนโลยีและเครื่องมือ</h4>
          <ul class="chips">
            <li v-for="t in active.tech" :key="t">{{ t }}</li>
          </ul>

          <template v-if="linksOf(active).length">
            <h4 class="info-h">ลิงก์โปรเจกต์</h4>
            <div class="link-list">
              <a v-for="l in linksOf(active)" :key="l.key" :href="l.url" target="_blank" rel="noopener"
                class="link-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" :fill="l.fill ? 'currentColor' : 'none'"
                  :stroke="l.fill ? 'none' : 'currentColor'" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" aria-hidden="true">
                  <path :d="l.path" />
                </svg>
                {{ l.label }}
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, ref, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  preview: { type: Boolean, default: false },
})

// ── รูปภาพ: ดึงทุกไฟล์ในโฟลเดอร์ project (รองรับชื่อไฟล์ที่มีเว้นวรรค) ──
const files = import.meta.glob('../assets/project/**/*.png', { eager: true, import: 'default' })
const shots = (dir, list) =>
  list.map(([name, alt]) => ({ src: files[`../assets/project/${dir}/${name}.png`], alt }))

// ── ข้อมูลโปรเจกต์ ──
const catLabel = { web: 'เว็บแอปพลิเคชัน', design: 'ออกแบบ UX/UI' }

const allProjects = [
  {
    id: 'pixelfilm',
    title: 'PixelFilm',
    category: 'design',
    badge: { text: 'กำลังพัฒนา', tone: 'sun' },
    summary: 'ออกแบบเว็บไซต์รีวิวและให้คะแนนภาพยนตร์ เน้นการ์ดแบบ Grid ที่เลือกดูหนังได้ง่าย',
    desc: 'PixelFilm เป็นโปรเจกต์ส่วนตัวที่ทำขึ้นเพื่อฝึกฝนทักษะ UX/UI Design ออกแบบเป็นเว็บไซต์สำหรับรีวิวและให้คะแนนภาพยนตร์ ครอบคลุมฟีเจอร์หลักตั้งแต่ระบบสมาชิก การเพิ่ม/แก้ไขข้อมูลหนัง การให้คะแนนและเขียนรีวิว ไปจนถึงระบบคอมเมนต์โต้ตอบใต้รีวิว เน้นออกแบบ Layout แบบ Grid Card ให้เลือกดูหนังได้ง่าย และจัดวางข้อมูลสำคัญ (คะแนนเฉลี่ย, จำนวนผู้รีวิว) ให้เห็นชัดตั้งแต่หน้าแรก ปัจจุบันโปรเจกต์ยังอยู่ระหว่างการพัฒนาและปรับปรุงดีไซน์อย่างต่อเนื่อง',
    tech: ['Figma', 'UX/UI Design'],
    figma: 'https://www.figma.com/design/Ah6t41CsStgQ8Vt4IrBWNK/PixelFilm?node-id=60-2&t=aainbDTn8Kj8mwLu-1',
    images: shots('pixelFilms', [['Homepage', 'หน้าหลัก'], ['Search', 'หน้าค้นหา']]),
  },
  {
    id: 'coop',
    title: 'CoOpSystem',
    category: 'web',
    badge: { text: 'โครงงานจบ', tone: 'lav' },
    summary: 'เว็บแอปบริหารจัดการงานสหกิจศึกษา เชื่อมนักศึกษา อาจารย์ สถานประกอบการ และผู้ดูแลระบบ ด้วยสิทธิ์ 6 บทบาท',
    desc: 'CoOpSystem คือเว็บแอปพลิเคชันสำหรับบริหารจัดการงานสหกิจศึกษา (Co-op) พัฒนาขึ้นเป็นโครงงานวิจัยของภาควิชาคอมพิวเตอร์ มหาวิทยาลัยศิลปากร ทำหน้าที่เชื่อมโยงนักศึกษา อาจารย์ สถานประกอบการ และผู้ดูแลระบบ ในกระบวนการฝึกงาน ตั้งแต่การประกาศและสมัครงาน การส่งตรวจแบบฟอร์ม ไปจนถึงการจัดการเอกสาร โดยควบคุมสิทธิ์การใช้งานผ่านระบบ RBAC ที่รองรับผู้ใช้ 6 บทบาท ด้านเทคโนโลยีที่ใช้พัฒนา ฝั่ง Frontend ใช้ Vue 3 ร่วมกับ Vite และ Axios ฝั่ง Backend พัฒนาด้วยภาษา Go และ Gin framework พร้อม JWT สำหรับยืนยันตัวตน จัดเก็บข้อมูลด้วย PostgreSQL และ Deploy ผ่าน Docker บน Vercel (Frontend) และ Google Cloud (Backend)',
    tech: ['Vue 3', 'Go (Gin)', 'PostgreSQL', 'Docker', 'Vercel', 'Google Cloud'],
    github: 'https://github.com/aceticacid09/CoOpSystem',
    live: 'https://co-op-system.vercel.app/',
    images: shots('seniorProject', [
      ['homepage', 'หน้าหลัก'], ['news', 'หน้าข่าวสารและกิจกรรม'], ['document', 'หน้าเอกสาร'], ['jobs', 'หน้าค้นหางาน'],
      ['student1', 'ส่วนของนักศึกษา'], ['student2', 'ส่วนของนักศึกษา'], ['student3', 'ส่วนของนักศึกษา'], ['student4', 'ส่วนของนักศึกษา'],
      ['company1', 'ส่วนของสถานประกอบการ'], ['company2', 'ส่วนของสถานประกอบการ'], ['company3', 'ส่วนของสถานประกอบการ'], ['company4', 'ส่วนของสถานประกอบการ'],
      ['teacher1', 'ส่วนของอาจารย์'], ['teacher2', 'ส่วนของอาจารย์'], ['teacher3', 'ส่วนของอาจารย์'],
      ['teacher4', 'ส่วนของอาจารย์'], ['teacher5', 'ส่วนของอาจารย์'], ['teacher6', 'ส่วนของอาจารย์'],
    ]),
  },
  {
    id: 'webcert',
    title: 'ComTrain WebCertificate',
    category: 'web',
    badge: { text: 'ใช้งานจริง', tone: 'mint' },
    summary: 'ระบบออกใบประกาศนียบัตรออนไลน์ พร้อม QR Code ตรวจสอบความถูกต้อง และหลังบ้านจัดการหลักสูตร',
    desc: 'ระบบออกใบประกาศนียบัตรออนไลน์สำหรับศูนย์อบรมคอมพิวเตอร์ วัดพระธรรมกาย ให้ผู้เข้าอบรมเลือกปี/หลักสูตร/ชื่อตัวเอง แล้วดาวน์โหลดใบประกาศเป็น PNG พร้อม QR Code ตรวจสอบความถูกต้องได้ทันที มี Admin Panel สำหรับจัดการหลักสูตรและรายชื่อผู้เรียนแบบเต็มรูปแบบ จุดที่ท้าทายที่สุดคือการเชื่อมต่อกับระบบรับสมัครเดิมของบริษัทผ่าน JotForm แบบ dual-write เมื่อผู้สมัครกรอกฟอร์ม ข้อมูลจะถูกส่งเข้า Airtable เดิมของบริษัทและฐานข้อมูล Neon ของระบบใหม่พร้อมกันโดยอัตโนมัติผ่าน Webhook โดยไม่กระทบการทำงานเดิมเลย ออกแบบ backend แบบแบ่งชั้น (Controller → Repository → Database) และมีระบบนำเข้าข้อมูลย้อนหลังจาก Airtable รองรับกรณีข้อมูลตกหล่น',
    tech: ['PHP 8.2', 'PostgreSQL (Neon)', 'Docker', 'JotForm API', 'Airtable API'],
    github: 'https://github.com/dkcapp/webcertificate',
    live: 'https://comtrain-webcertificate.onrender.com/',
    images: shots('webcertificate', [
      ['main1', 'หน้าดาวน์โหลดใบประกาศ'], ['main2', 'หน้าเลือกรายชื่อดาวน์โหลดใบสมัคร'], ['main3', 'หน้าเข้าสู่ระบบผู้ดูแล'],
      ['main4', 'หน้าแสดงรายชื่อคอร์สเรียนทั้งหมด'], ['main5', 'หน้าจัดการรายชื่อผู้เรียน'], ['main6', 'หน้าดึงข้อมูลผู้เรียน'],
    ]),
  },
  {
    id: 'fdnet',
    title: 'FD-net Callcenter 4141',
    category: 'web',
    badge: { text: 'ใช้งานจริง', tone: 'mint' },
    summary: 'เว็บพอร์ทัลบริการสารสนเทศสำหรับบุคลากร ค้นหาแบบเรียลไทม์ และรองรับทุกขนาดหน้าจอ',
    desc: 'เว็บพอร์ทัลบริการสารสนเทศสำหรับบุคลากรวัดพระธรรมกาย รองรับบริการหลักครบวงจร ทั้งการขอ/ต่ออายุ Account, คู่มือ Join Domain, FAQ แก้ปัญหา และระบบจัดหาอุปกรณ์ IT ออกแบบให้ใช้งานง่าย พร้อม Real-time Search และ Responsive Layout รองรับทุกอุปกรณ์',
    tech: ['PHP 8', 'HTML5', 'CSS3', 'JavaScript', 'Apache/Nginx'],
    github: 'https://github.com/akarawitx/fdnet-callcenter',
    live: 'https://fdnet.dhammakaya.network/services-new/',
    images: shots('fdnetService', [
      ['homepage', 'หน้าหลัก'], ['service1', 'หน้าบริการ 1'], ['service2', 'หน้าบริการ 2'], ['service3', 'หน้าบริการ 3'], ['service4', 'หน้าบริการ 4'],
      ['procurement1', 'หน้าจัดหาอุปกรณ์ 1'], ['procurement2', 'หน้าจัดหาอุปกรณ์ 2'], ['procurement3', 'หน้าจัดหาอุปกรณ์ 3'],
      ['procurement4', 'หน้าจัดหาอุปกรณ์ 4'], ['network1', 'หน้าเครือข่าย'],
    ]),
  },
  {
    id: 'funfoods',
    title: 'FunFoods',
    category: 'design',
    badge: { text: 'รองชนะเลิศอันดับ 1', tone: 'gold' },
    summary: 'แพลตฟอร์มแบ่งปันและค้นหาสูตรอาหาร พร้อมระบบให้คะแนน รีวิว และบันทึกสูตรโปรด',
    desc: 'FunFoods (Recipe Sharing Web Platform) เป็นโปรเจกต์ที่พัฒนาขึ้นในรายวิชาเตรียมโครงงานวิจัย คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร โดยมีเป้าหมายออกแบบแพลตฟอร์มออนไลน์สำหรับแบ่งปันและค้นหาสูตรอาหาร ให้ผู้ใช้สามารถอัปโหลดสูตรอาหารพร้อมรายละเอียดวัตถุดิบและขั้นตอนการทำ ค้นหาสูตรตามหมวดหมู่ วัตถุดิบ และระดับความยาก พร้อมระบบให้คะแนนและรีวิวเพื่อช่วยตัดสินใจเลือกสูตรได้ง่ายขึ้น นอกจากนี้ยังมีระบบจัดการบัญชีผู้ใช้สำหรับบันทึกสูตรโปรดและจัดการโปรไฟล์ส่วนตัว ออกแบบ UI/UX ทั้งหมดผ่าน Figma ผลงานนี้ได้รับรางวัลรองชนะเลิศอันดับ 1 จากการนำเสนอโครงงานต่อคณะกรรมการและอาจารย์ประจำภาควิชาคอมพิวเตอร์',
    tech: ['Figma', 'UX/UI Design', 'Prototyping'],
    figma: 'https://www.figma.com/design/jgGJnX3DaRVLSufUoPMFNL/FunFoods?node-id=1-325&t=byte1ObwaFxYAnTd-1',
    drive: 'https://drive.google.com/drive/folders/1XH4nwMkEY740G8jXjLrCddjpTTLKtmOZ?usp=sharing',
    images: shots('FunFoods', [
      ['HomePage-BeforeLogin', 'หน้าหลัก'], ['HomePage-AfterLogin', 'หน้าหลัก หลังเข้าสู่ระบบ'], ['Search', 'หน้าค้นหาสูตรอาหาร'],
      ['Bookmark', 'หน้ารายการสูตรอาหารที่บันทึก'], ['Signup', 'หน้าสมัครสมาชิก'], ['Login', 'หน้าเข้าสู่ระบบ'],
      ['Share', 'หน้าแชร์สูตรอาหาร'], ['AfterShare', 'หน้าหลังแชร์สูตรอาหาร'], ['FoodDetails', 'หน้ารายละเอียดสูตรอาหาร'],
      ['MyProfile', 'หน้าโปรไฟล์ผู้ใช้'], ['MyProfile-post', 'หน้าโปรไฟล์ สูตรที่แชร์'],
      ['Other-Profile', 'หน้าโปรไฟล์ผู้ใช้อื่น'], ['Other-Profile-Post', 'หน้าโปรไฟล์ผู้ใช้อื่น สูตรที่แชร์'],
    ]),
  },
  {
    id: 'elibrary',
    title: 'SU E-Library',
    category: 'design',
    device: 'mobile',
    cover: 2,
    summary: 'แอปยืม-คืนหนังสือห้องสมุด ค้นหาหนังสือและตำแหน่งบนชั้น ออกแบบจากการสัมภาษณ์ผู้ใช้จริง',
    desc: 'SU E-Library เป็นโปรเจกต์ที่พัฒนาขึ้นในรายวิชา UX/UI Design โดยได้รับโจทย์ให้ออกแบบระบบที่อำนวยความสะดวกในการใช้งานห้องสมุด จึงเกิดเป็นแนวคิดแอปพลิเคชันสำหรับยืม-คืนหนังสือในห้องสมุด ครอบคลุมฟีเจอร์หลักตั้งแต่การยืม-คืนหนังสือ การค้นหาหนังสือและตำแหน่งจัดวางบนชั้น การตรวจสอบสถานะการยืม-คืน ไปจนถึงระบบสอบถามเจ้าหน้าที่ออนไลน์และแชตบอตสำหรับตอบคำถามเบื้องต้น กระบวนการออกแบบเน้นการทำ User Research จริง โดยสัมภาษณ์ผู้ใช้งานห้องสมุดจริงเพื่อเก็บ Pain Point และนำผลการทดสอบใช้งาน (Usability Testing) มาปรับปรุงการออกแบบซ้ำหลายรอบ (Iterative Design) จนได้ต้นแบบที่ตอบโจทย์การใช้งานจริงมากที่สุด',
    tech: ['Figma', 'UX/UI Design', 'Prototyping'],
    figma: 'https://www.figma.com/design/742ZZ3tAYhLYCNJWHrQZBo/SU-E-LIBRARY?node-id=10-1189&t=89G0N1AFgd8oMLSp-1',
    drive: 'https://drive.google.com/drive/folders/1WRAuW6nGbm17_Dq37VAkohq7gIAj46uP?usp=sharing',
    images: shots('eLibrary', [
      ['Opening', 'หน้าเริ่มต้น'], ['Log-in', 'หน้าเข้าสู่ระบบ'], ['Main1', 'หน้าแรก'], ['Recommence book', 'หน้าหนังสือแนะนำ'],
      ['New book', 'หน้าหนังสือใหม่'], ['Popular book', 'หน้าหนังสือยอดนิยม'], ['list', 'หน้ารายการหนังสือ'],
      ['following book', 'หน้าหนังสือที่ติดตาม'], ['Main', 'หน้าเมนูต่างๆ'], ['profile barcode', 'หน้าโปรไฟล์'],
      ['book info 3', 'หน้ารายละเอียดหนังสือ'], ['ebook (while reading)', 'หน้าอ่านหนังสือ'],
      ['ebook (ask before exit)', 'หน้ายืนยันก่อนออกจากการอ่าน'], ['filter 1', 'หน้าค้นหาขั้นสูง'],
      ['Error page', 'หน้าเกิดข้อผิดพลาด'], ['chat 2', 'หน้าแชต'], ['search (no keyboard)', 'หน้าค้นหา'], ['searching', 'หน้าผลการค้นหา'],
    ]),
  },
  {
    id: 'arttoy',
    title: 'MafiaSU Arttoy',
    category: 'web',
    summary: 'เว็บ E-Commerce ซื้อ-ขายของสะสม Art Toy พร้อมระบบเข้าสู่ระบบด้วย Google',
    desc: 'เว็บแอปพลิเคชัน E-Commerce สำหรับซื้อ-ขายของสะสม Art Toy พัฒนาด้วย React และ Go (Gin) พร้อมระบบ Authentication ด้วย Google OAuth + JWT และจัดการฐานข้อมูลผ่าน PostgreSQL บน Docker',
    tech: ['React', 'Go (Gin)', 'PostgreSQL', 'Docker', 'Google OAuth', 'JWT'],
    github: 'https://github.com/thanachotelu/MafiaSU_arttoy',
    images: shots('mafiaToys', [['homepage', 'หน้าหลัก']]),
  },
  {
    id: 'hr',
    title: 'SA/BIS — HR Appraisal System',
    category: 'web',
    summary: 'ระบบประเมินผลบุคลากรสำหรับองค์กร รองรับ 3 บทบาท พร้อมแดชบอร์ดแสดงผลด้วยกราฟ',
    desc: 'โปรเจกต์กลุ่มพัฒนาระบบ HR Appraisal สำหรับองค์กร รองรับ 3 บทบาท ได้แก่ Chief, Manager และ Officer โดย Requirement ได้จากการสัมภาษณ์บริษัทจริง พัฒนาด้วย PHP + PostgreSQL พร้อมแสดงผลด้วย ApexCharts และ Deploy ด้วย Docker',
    tech: ['PHP', 'Bootstrap', 'PostgreSQL', 'Docker', 'ApexCharts'],
    github: 'https://github.com/thanachotelu/mafiaSU',
    images: shots('mafiaSU', [['manager-dashboard', 'แดชบอร์ดผู้จัดการ']]),
  },
]

const list = computed(() => (props.preview ? allProjects.slice(0, 2) : allProjects))

// ── ตัวกรอง ──
const filter = ref('all')
const filters = computed(() => [
  { id: 'all', label: 'ทั้งหมด', count: list.value.length },
  { id: 'web', label: catLabel.web, count: list.value.filter((p) => p.category === 'web').length },
  { id: 'design', label: catLabel.design, count: list.value.filter((p) => p.category === 'design').length },
])
const visible = computed(() =>
  filter.value === 'all' ? list.value : list.value.filter((p) => p.category === filter.value)
)

const coverOf = (p) => p.images[p.cover ?? 0]

// ── ลิงก์ของโปรเจกต์ ──
const linkDefs = {
  github: {
    label: 'ดูโค้ดบน GitHub', fill: true,
    path: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z',
  },
  live: {
    label: 'เปิดเว็บไซต์จริง', fill: false,
    path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
  },
  figma: {
    label: 'ดูงานออกแบบใน Figma', fill: true,
    path: 'M8.5 24a3.5 3.5 0 0 1 0-7H12v3.5A3.5 3.5 0 0 1 8.5 24zM5 13.5A3.5 3.5 0 0 1 8.5 10H12v7H8.5A3.5 3.5 0 0 1 5 13.5zM5 6.5A3.5 3.5 0 0 1 8.5 3H12v7H8.5A3.5 3.5 0 0 1 5 6.5zM12 3h3.5a3.5 3.5 0 1 1 0 7H12V3zM19 13.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z',
  },
  drive: {
    label: 'เปิดโฟลเดอร์ Google Drive', fill: true,
    path: 'M7.71 3.5L1.15 15l3.5 6h6.56l-6.56-12h.06L7.71 3.5zm5.87 0l6.56 11.5H13.5L7.28 3.5h6.3zM17.79 21l3.5-6-3.35-5.85-6.87 11.85h6.72z',
  },
}
const linksOf = (p) =>
  Object.keys(linkDefs)
    .filter((k) => p[k] && p[k] !== '#')
    .map((k) => ({ key: k, url: p[k], ...linkDefs[k] }))

// ── หน้าต่างรายละเอียด + แกลเลอรี ──
const active = ref(null)
const index = ref(0)
const closeBtn = ref(null)
const current = computed(() => active.value?.images[index.value] ?? { src: '', alt: '' })
const multi = computed(() => (active.value?.images.length ?? 0) > 1)

const zoom = ref(1)
const panX = ref(0)
const panY = ref(0)
const isDragging = ref(false)
const dragStart = { x: 0, y: 0 }
let lastDist = null
let lastFocus = null

function openProject(p) {
  lastFocus = document.activeElement
  active.value = p
  index.value = 0
  resetZoom()
  document.body.style.overflow = 'hidden'
  nextTick(() => closeBtn.value?.focus())
}

function closeModal() {
  active.value = null
  document.body.style.overflow = ''
  lastFocus?.focus?.()
}

function goTo(i) { index.value = i; resetZoom() }
function prevImage() { goTo((index.value - 1 + active.value.images.length) % active.value.images.length) }
function nextImage() { goTo((index.value + 1) % active.value.images.length) }

function resetZoom() { zoom.value = 1; panX.value = 0; panY.value = 0 }
function setZoom(v) {
  zoom.value = Math.min(Math.max(v, 1), 5)
  if (zoom.value === 1) { panX.value = 0; panY.value = 0 }
}
function zoomIn() { setZoom(zoom.value + 0.25) }
function zoomOut() { setZoom(zoom.value - 0.25) }
function onWheel(e) { setZoom(zoom.value + (e.deltaY > 0 ? -0.15 : 0.15)) }

// ลากเพื่อเลื่อนดูภาพ (เมื่อซูมเข้าอยู่)
function startDrag(x, y) {
  if (zoom.value <= 1) return
  isDragging.value = true
  dragStart.x = x - panX.value
  dragStart.y = y - panY.value
}
function moveDrag(x, y) {
  if (!isDragging.value) return
  panX.value = x - dragStart.x
  panY.value = y - dragStart.y
}
function onMouseDown(e) { startDrag(e.clientX, e.clientY) }
function onMouseMove(e) { moveDrag(e.clientX, e.clientY) }
function onPointerEnd() { isDragging.value = false; lastDist = null }

// นิ้วสัมผัส: ลากและบีบซูม
const touchDist = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY)
function onTouchStart(e) {
  if (e.touches.length === 2) lastDist = touchDist(e.touches)
  else if (e.touches.length === 1) startDrag(e.touches[0].clientX, e.touches[0].clientY)
}
function onTouchMove(e) {
  if (e.touches.length === 2 && lastDist !== null) {
    const d = touchDist(e.touches)
    setZoom(zoom.value + (d - lastDist) * 0.01)
    lastDist = d
  } else if (e.touches.length === 1) {
    moveDrag(e.touches[0].clientX, e.touches[0].clientY)
  }
}

function onKeydown(e) {
  if (!active.value) return
  if (e.key === 'Escape') closeModal()
  else if (e.key === 'ArrowLeft' && multi.value) prevImage()
  else if (e.key === 'ArrowRight' && multi.value) nextImage()
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.projects {
  --ink: var(--text-primary);
  /* พื้นหลังน้ำเงินของส่วนนี้ (อยากได้เข้มขึ้นลองเปลี่ยนเป็น #1e3a8a) */
  background-color: #24367d;
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px);
  background-size: 26px 26px;
}

/* ───────── หัวข้อ ───────── */
.projects-head { margin-bottom: 28px; }

.eyebrow {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #bfdbfe;
}

.projects-title {
  margin-top: 8px;
  font-family: var(--font-body);
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  font-weight: 700;
  line-height: 1.5;
  color: #fff;
}
.mark {
  background: linear-gradient(transparent 62%, rgba(157, 160, 233, 0.45) 62%);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.projects-sub {
  max-width: 560px;
  margin-top: 8px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #dbeafe;
}

/* ───────── ตัวกรอง ───────── */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 36px;
}
.filter {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #fff;
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 999px;
  box-shadow: 3px 3px 0 var(--ink);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
.filter:hover { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--ink); }
.filter.active { background: var(--ink); color: #fff; }
.filter-count {
  min-width: 22px;
  padding: 0 6px;
  background: #dbeafe;
  color: var(--ink);
  border-radius: 999px;
  font-size: 0.75rem;
  text-align: center;
}
.filter.active .filter-count { background: #fff; }
.filter:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }

/* ───────── การ์ด ───────── */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 28px;
}

.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  border: 2.5px solid var(--ink);
  border-radius: 20px;
  box-shadow: 6px 6px 0 var(--ink);
  transition: transform 0.15s, box-shadow 0.15s;
}
.card:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 var(--ink); }

.thumb {
  position: relative;
  height: 210px;
  overflow: hidden;
  background: #dbeafe;
  border-bottom: 2.5px solid var(--ink);
  cursor: zoom-in;
}
.thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.3s;
}
.card:hover .thumb img { transform: scale(1.03); }
.thumb--phone img { object-fit: contain; padding: 12px 0; }

.count {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 2px 10px;
  background: #fff;
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
}

.card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 10px;
}
.cat {
  font-size: 0.78rem;
  font-weight: 600;
  color: #1d4ed8;
}

.badge {
  padding: 1px 10px;
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.6;
}
.badge.sun { background: #fef3c7; }
.badge.mint { background: #d1fae5; }
.badge.lav { background: #ede9fe; }
.badge.gold { background: #fde68a; }

.card-title {
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--ink);
}

.card-sum {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 6px;
  font-size: 0.88rem;
  line-height: 1.75;
  color: #475569;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
  list-style: none;
}
.chips li {
  padding: 2px 10px;
  background: #eff6ff;
  color: var(--ink);
  border: 1.5px solid var(--ink);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
}
.chips li.more { background: #fff; }

.card-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 20px;
}
.icon-links { display: flex; gap: 8px; }

/* ───────── ปุ่ม ───────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 9px 18px;
  border: 2px solid var(--ink);
  border-radius: 10px;
  box-shadow: 3px 3px 0 var(--ink);
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
.btn:hover { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--ink); }
.btn--primary { background: var(--accent); color: #fff; }

.icon-btn {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  background: #fff;
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 10px;
  box-shadow: 2px 2px 0 var(--ink);
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
}
.icon-btn:hover {
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0 var(--ink);
  background: #dbeafe;
  opacity: 1;
}

.card .btn:focus-visible,
.card .icon-btn:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }

/* ═════════ หน้าต่างรายละเอียด ═════════ */
.modal {
  --ink: var(--text-primary);
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(11, 18, 32, 0.82);
  backdrop-filter: blur(4px);
}

.dialog {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(280px, 1fr);
  width: min(1120px, 100%);
  height: min(86vh, 760px);
  overflow: hidden;
  background: #fff;
  border: 2.5px solid var(--ink);
  border-radius: 22px;
  box-shadow: 8px 8px 0 #2563eb;
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 5;
  width: 38px;
  height: 38px;
  background: #fff;
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 10px;
  box-shadow: 2px 2px 0 var(--ink);
  font-size: 1rem;
  cursor: pointer;
}

/* แกลเลอรี */
.gallery {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  background: #0f172a;
}

.viewer {
  position: relative;
  display: grid;
  flex: 1;
  min-height: 0;
  place-items: center;
  overflow: hidden;
  user-select: none;
}
.viewer-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transform-origin: center;
  transition: transform 0.12s ease;
}
.viewer-img.pannable { cursor: grab; }
.viewer-img.dragging { cursor: grabbing; transition: none; }

.counter {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 2px 12px;
  background: #fff;
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
}

.nav {
  position: absolute;
  top: 50%;
  z-index: 2;
  width: 42px;
  height: 42px;
  transform: translateY(-50%);
  background: #fff;
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 12px;
  box-shadow: 2px 2px 0 var(--ink);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
}
.nav.prev { left: 12px; }
.nav.next { right: 12px; }

.tools {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  color: #e2e8f0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 0.85rem;
}
.caption { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.zoom { display: flex; flex-shrink: 0; align-items: center; gap: 8px; }
.zoom span { min-width: 44px; text-align: center; }
.zoom button {
  padding: 3px 12px;
  background: #fff;
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.thumbs {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 10px 14px;
  background: #0b1220;
}
.thumb-btn {
  flex-shrink: 0;
  width: 68px;
  height: 46px;
  padding: 0;
  overflow: hidden;
  background: #1e293b;
  border: 2px solid transparent;
  border-radius: 8px;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.15s, border-color 0.15s;
}
.thumb-btn img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top; }
.thumb-btn:hover { opacity: 0.9; }
.thumb-btn.on { border-color: #60a5fa; opacity: 1; }

/* ข้อมูลโปรเจกต์ */
.info {
  overflow-y: auto;
  padding: 28px 26px;
}
.info .meta { padding-right: 44px; }
.info-title {
  margin-top: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--ink);
}
.info-desc {
  margin-top: 12px;
  font-size: 0.93rem;
  line-height: 1.9;
  color: #334155;
}
.info-h {
  margin-top: 24px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--ink);
}
.info .chips { margin-top: 10px; }

.link-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}
.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: #fff;
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 10px;
  box-shadow: 3px 3px 0 var(--ink);
  font-size: 0.9rem;
  font-weight: 600;
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
}
.link-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--ink);
  background: #dbeafe;
  opacity: 1;
}

.close:focus-visible,
.nav:focus-visible,
.zoom button:focus-visible,
.thumb-btn:focus-visible,
.link-btn:focus-visible { outline: 3px solid #60a5fa; outline-offset: 2px; }

/* ───────── Responsive ───────── */
@media (max-width: 900px) {
  .dialog {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0, 52%) minmax(0, 1fr);
    height: min(92vh, 900px);
  }
  .modal { padding: 12px; }
}

@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; gap: 24px; }
  .thumb { height: 190px; }
  .info { padding: 22px 20px; }
  .caption { display: none; }
  .tools { justify-content: center; }
}

@media (prefers-reduced-motion: reduce) {
  .card, .filter, .btn, .icon-btn, .link-btn, .thumb img, .viewer-img { transition: none; }
}
</style>