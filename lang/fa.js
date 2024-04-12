// ---------- Navbar Titles
const faNavbarData = {
    title: "نام شما",
    home: "خانه",
    publications: "مقالات",
    research: "تحقیقات",
    jobs: "سوابق شغلی",
    contact: "ارتباط با من",
};

// ---------- Home Page Data
const faHomePageData = {
    name: "نام شما",
    jobTitle: "عنوان شغلی",
    home_title: "درباره من",
    home_content: `
    <div>
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>
      <h2 class='title'>کارهای من</h2>
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.</p>
      <ul>
        <li>عنوان پیشفرض 1</li>
        <li>عنوان پیشفرض 2</li>
        <li>عنوان پیشفرض 3</li>
      </ul>
    </div>
    `,
};

// ---------- Publications Page Data
const faPublicationsPageData = {
  type_one_title: "مقالات منتشر شده",
  type_one_items: [
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده.`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. `,
      date: "2001",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی", "سارا امینی"],
    },
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده.`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. `,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی", ""],
    },
  ],

  type_two_title: "مقالات تحت بررسی",
  type_two_items: [
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده.`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. `,
      date: "2001",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی", "سارا امینی"],
    },
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده.`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. `,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی", ""],
    },
  ],

  type_three_title: "مقالات کنفرانسی",
  type_three_items: [
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده.`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. `,
      date: "2001",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی", "سارا امینی"],
    },
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده.`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. `,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی", ""],
    },
  ],

  type_four_title: "فصل های کتاب",
  type_four_items: [
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده.`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. `,
      date: "2001",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی", "سارا امینی"],
    },
    {
      title: `رقصیدن با ضربان تغییرات اقلیمی: مطالعه فریم‌های بصری در TikTok از طریق شکاف چپ و راست میان سیاستمداران ایالات متحده.`,
      abstract: `سیاستمداران در سراسر طیف سیاسی در تلاش برای دسترسی به رای دهندگان جوان با تولید ویدیوهای اصلی به TikTok رفته اند. این روند جدید، TikTok را به حلقه قطبی جدید در نبرد ارتباطات سیاسی تبدیل کرده است و نفوذ حزبی در مورد موضوعاتی مانند تغییرات آب و هوا را عمیق تر می کند. `,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["علی احمدی", ""],
    },
  ],
};

// ---------- Research Page Data
const faResearchPageData = {
  title: "تحقیقات",
  content: 
  `
  <div class='research_content'>
    <p>هدف تحقیق من ترکیب سه زیر زمینه اصلی علوم اجتماعی محاسباتی، از جمله تجزیه و تحلیل داده های رسانه های اجتماعی، تجزیه و تحلیل شبکه، و مدل سازی مبتنی بر عامل، برای مطالعه مسائل مختلف علوم اجتماعی است. در زیر می توانید خلاصه ای از پروژه های گذشته و فعلی من را مشاهده کنید.</p>
    <br />
    <h4 style="font-size: 1.1rem">شناسایی و شناسایی افراط گرایان ایدئولوژیک داخلی ایالات متحده</h4>
    <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
    <img src='../files/images/research.png'/>
    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
  </div>
  `,
};

// ---------- Jobs Page Data
const faJobsPageData = {
  title: "سوابق شغلی",
  items: [
    {
      title: "عنوان شغلی",
      company: "نام شرکت",
      startData: "31 فروردین 1401",
      endDate: "",
      location: "تهران",
      abstract: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      achievements: ["دستاورد 1", "دستاورد 2", "دستاورد 3"],
    },
    {
      title: "عنوان شغلی",
      company: "نام شرکت",
      startData: "31 فروردین 1398",
      endDate: "31 فروردین 1401",
      location: "تهران",
      abstract: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      achievements: ["دستاورد 1", "دستاورد 2"],
    },
  ],
};