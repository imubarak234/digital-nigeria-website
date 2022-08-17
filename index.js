
const day1 = document.getElementById("day-1");
const day2 = document.getElementById("day-2");

const section = document.getElementById("sections-container");

const tables = document.getElementById("schedule");

const section1 = document.getElementById("day1-section-1");
const section2 = document.getElementById("day1-section-2");
const section3 = document.getElementById("day1-section-3");

let parent7 = section1.parentNode
let parent8 = section2.parentNode
let parent9 = section3.parentNode

section1.addEventListener("click", function() {

  parent7.style.borderBottom = '2px solid #081c15';
  parent8.style.borderBottom = 'none';
  parent9.style.borderBottom = 'none';

  tables.innerHTML = `<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 07:00AM - 09:00AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>REGISTRATION</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 09:00AM - 10:00AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>ARRIVAL OF VIPS, REGISTRATION OF VIPS, SPECIAL GUESTS</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 10:00AM - 10:05AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>ARRIVAL OF MR. PRESIDENT AND NATIONAL ANTHEM</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 10:05AM - 10:10AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>WELCOME ADDRESS AND PROGRAMME HIGHLIGHT</h4>
        <P>Welcome Address and Programme Highlight Kashifu Inuwa Abdullahi, CCIE, Director General/CEO, 
          National Information Technology Development Agency (NITDA)</P>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 10:10AM - 10:20AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>REMARKS BY CHIEF HOST</h4>
        <p>Remarks by Chief Host Isa Ali Ibrahim Pantami, Ph.D., FNCS, FBCS, FIIM, Honorable Minister, 
          Federal Ministry of Communications & Digital Economy</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 10:20AM - 10:25AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>START-UP PITCHES</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 10:25AM - 10:30AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>GOODWILL MESSAGES</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 10:30AM - 10:45AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>KEYNOTE SPEAKER</h4>
        <p>Keynote Speaker Ms Funke Opeke Managing Director, Main One Limited Lagos.</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 10:45AM - 10:55AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>OFFICIAL OPENING AND UNVEILING OF DIGITAL ECONOMY STRATEGY AND ACTION FOR DIGITAL NIGERIA.</h4>
        <p>His Excellency, President Muhammadu Buhari, GCFR President and Commander-in-Chief 
          of the Armed Forces Federal Republic of Nigeria</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 10:55AM - 11:00AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>NATIONAL ANTHEM</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 11:00AM - 11:05AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>GROUP PHOTO</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 11:05AM - 11:10AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>TOUR OF EXHIBITIONS</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 11:15AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>DEPARTURE OF PRESIDENT</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row border-bottom-0">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p> 11:15AM - 12:00AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>TEA BREAK</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>`
});

section2.addEventListener("click", function() {

  parent7.style.borderBottom = 'none';
  parent8.style.borderBottom = '2px solid #081c15';
  parent9.style.borderBottom = 'none';

  tables.innerHTML = `<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Sub-theme</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>SUB-THEME</h4>
        <p>EXPERT REVIEW OF DRAFT NATIONAL DIGITAL ECONOMY POLICY AND STRATEGY</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Topic:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PRESENTATION OF DRAFT NATIONAL DIGITAL ECONOMY POLICY & STRATEGY</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Presenter:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>MR M. ISTIFANUS</h4>
        <P>Permanent Secretary, Federal Ministry of Communications and Digital Economy Abuja.</P>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Moderator:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>DR EVANS WUHEREM</h4>
        <p>Digital Africa, Abuja.</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 1:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>SHUBHAM CHAUDHURI</h4>
        <p>Country Director World Bank Abuja</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 2:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PROF IBRAHIM DAMBATA</h4>
        <p>Executive Vice Chairman Nigerian Communications Commission Abuja.</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 3:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>MASTER CARD NIGERIA</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 4:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>ASHWANI MASHRA</h4>
        <p>Director, Marketing and Solutions Huawei Nigeria.</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 5:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>JOHN AYOH</h4>
        <p>Former IT Director Central Bank of Nigeria</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 6:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>MR LEA STAN EKE</h4>
        <p>Chairman, ZINOX Technologies Limited Lagos.
        </p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row border-bottom-0">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p>01:30PM - 02:30PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>LUNCH</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>`
});

section3.addEventListener("click", function() {

  parent7.style.borderBottom = 'none';
  parent8.style.borderBottom = 'none';
  parent9.style.borderBottom = '2px solid #081c15';

  tables.innerHTML = `<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Sub-theme</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>BUILDING THE INFRASTRUCTURE FOR THE FOURTH INDUSTRIAL REVOLUTION</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Topic:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>CHALLENGES AND OPPORTUNITIES FOR INFRASTRUCTURE AND HUMAN CAPITAL DEVELOPMENT</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Presenter:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>ZHANG LULU</h4>
        <P>Managing Director Nigeria/ Vice President, Huawei Africa</P>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Moderator:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>MR YUSSUF KAZAURE</h4>
        <p>Galaxy Backbone Limited Abuja.</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 1:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PROF SAHALU JUNAIDU</h4>
        <p>Department of Computer Science Ahmadu Bello University Zaria</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 2:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>BARR. BISI ADEGBUYI</h4>
        <p>Managing Director/CE NIPOST</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 3:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PROF AMINU AHMAD</h4>
        <p>Department of Management and Information Technology Abubakar Tafawa Balewa University Bauchi</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 4:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>
          UCHENNA ONWUAMAEGBU-UGWU</h4>
        <p>Edufun Technik STEM Hub Awka.</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 5:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>
          DR ABIMBOLA H. ALALE</h4>
        <p>Managing Director/CE NigComSat Abuja.</p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clipboard2-check"></i>
          <p>Panelist 6:</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>MR YAKUBU SANI</h4>
        <p>Government Relations & Business Development Manager Main One Cable Company Lagos.
        </p>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p>04:00PM - 04:30PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>START-UP PITCHES</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row border-bottom-0">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p>04:30PM - 05:00PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>WRAP UP OF DAY ONE</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>`
});

day1.addEventListener("click", function(){
  section.innerHTML = `<li>
  <button id="day1-section-1">SESSION 1</button>
  </li>
  <li>
    <button id="day1-section-2">SESSION 2</button>
  </li>
  <li>
    <button id="day1-section-3">SESSION 3</button>
  </li>`

  let section11 = document.getElementById("day1-section-1");
  let section12 = document.getElementById("day1-section-2");
  let section13 = document.getElementById("day1-section-3");

  let parent1 = section11.parentNode
  let parent2 = section12.parentNode
  let parent3 = section13.parentNode

  section11.addEventListener("click", function() {

    parent1.style.borderBottom = '2px solid #081c15';
    parent2.style.borderBottom = 'none';
    parent3.style.borderBottom = 'none';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 07:00AM - 09:00AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>REGISTRATION</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 09:00AM - 10:00AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>ARRIVAL OF VIPS, REGISTRATION OF VIPS, SPECIAL GUESTS</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 10:00AM - 10:05AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>ARRIVAL OF MR. PRESIDENT AND NATIONAL ANTHEM</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 10:05AM - 10:10AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>WELCOME ADDRESS AND PROGRAMME HIGHLIGHT</h4>
          <P>Welcome Address and Programme Highlight Kashifu Inuwa Abdullahi, CCIE, Director General/CEO, 
            National Information Technology Development Agency (NITDA)</P>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 10:10AM - 10:20AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>REMARKS BY CHIEF HOST</h4>
          <p>Remarks by Chief Host Isa Ali Ibrahim Pantami, Ph.D., FNCS, FBCS, FIIM, Honorable Minister, 
            Federal Ministry of Communications & Digital Economy</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 10:20AM - 10:25AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>START-UP PITCHES</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 10:25AM - 10:30AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GOODWILL MESSAGES</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 10:30AM - 10:45AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>KEYNOTE SPEAKER</h4>
          <p>Keynote Speaker Ms Funke Opeke Managing Director, Main One Limited Lagos.</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 10:45AM - 10:55AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>OFFICIAL OPENING AND UNVEILING OF DIGITAL ECONOMY STRATEGY AND ACTION FOR DIGITAL NIGERIA.</h4>
          <p>His Excellency, President Muhammadu Buhari, GCFR President and Commander-in-Chief 
            of the Armed Forces Federal Republic of Nigeria</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 10:55AM - 11:00AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>NATIONAL ANTHEM</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 11:00AM - 11:05AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GROUP PHOTO</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 11:05AM - 11:10AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>TOUR OF EXHIBITIONS</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 11:15AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>DEPARTURE OF PRESIDENT</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row border-bottom-0">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p> 11:15AM - 12:00AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>TEA BREAK</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>`
  });

  section12.addEventListener("click", function() {

    parent1.style.borderBottom = 'none';
    parent2.style.borderBottom = '2px solid #081c15';
    parent3.style.borderBottom = 'none';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Sub-theme</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>SUB-THEME</h4>
          <p>EXPERT REVIEW OF DRAFT NATIONAL DIGITAL ECONOMY POLICY AND STRATEGY</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Topic:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PRESENTATION OF DRAFT NATIONAL DIGITAL ECONOMY POLICY & STRATEGY</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Presenter:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MR M. ISTIFANUS</h4>
          <P>Permanent Secretary, Federal Ministry of Communications and Digital Economy Abuja.</P>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Moderator:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>DR EVANS WUHEREM</h4>
          <p>Digital Africa, Abuja.</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 1:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>SHUBHAM CHAUDHURI</h4>
          <p>Country Director World Bank Abuja</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 2:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PROF IBRAHIM DAMBATA</h4>
          <p>Executive Vice Chairman Nigerian Communications Commission Abuja.</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 3:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MASTER CARD NIGERIA</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 4:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>ASHWANI MASHRA</h4>
          <p>Director, Marketing and Solutions Huawei Nigeria.</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 5:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>JOHN AYOH</h4>
          <p>Former IT Director Central Bank of Nigeria</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 6:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MR LEA STAN EKE</h4>
          <p>Chairman, ZINOX Technologies Limited Lagos.
          </p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row border-bottom-0">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>01:30PM - 02:30PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>LUNCH</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>`
  });

  section13.addEventListener("click", function() {

    parent1.style.borderBottom = 'none';
    parent2.style.borderBottom = 'none';
    parent3.style.borderBottom = '2px solid #081c15';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Sub-theme</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>BUILDING THE INFRASTRUCTURE FOR THE FOURTH INDUSTRIAL REVOLUTION</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Topic:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>CHALLENGES AND OPPORTUNITIES FOR INFRASTRUCTURE AND HUMAN CAPITAL DEVELOPMENT</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Presenter:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>ZHANG LULU</h4>
          <P>Managing Director Nigeria/ Vice President, Huawei Africa</P>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Moderator:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MR YUSSUF KAZAURE</h4>
          <p>Galaxy Backbone Limited Abuja.</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 1:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PROF SAHALU JUNAIDU</h4>
          <p>Department of Computer Science Ahmadu Bello University Zaria</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 2:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>BARR. BISI ADEGBUYI</h4>
          <p>Managing Director/CE NIPOST</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 3:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PROF AMINU AHMAD</h4>
          <p>Department of Management and Information Technology Abubakar Tafawa Balewa University Bauchi</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 4:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>
            UCHENNA ONWUAMAEGBU-UGWU</h4>
          <p>Edufun Technik STEM Hub Awka.</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 5:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>
            DR ABIMBOLA H. ALALE</h4>
          <p>Managing Director/CE NigComSat Abuja.</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 6:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MR YAKUBU SANI</h4>
          <p>Government Relations & Business Development Manager Main One Cable Company Lagos.
          </p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>04:00PM - 04:30PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>START-UP PITCHES</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row border-bottom-0">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>04:30PM - 05:00PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>WRAP UP OF DAY ONE</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>`
  });
});

day2.addEventListener("click", function(){
  section.innerHTML = `<li>
  <button id="day1-section-4">SESSION ONE</button>
  </li>
  <li>
    <button id="day1-section-5">SESSION TWO</button>
  </li>
  <li>
    <button id="day1-section-6">SESSION THREE</button>
  </li>`

  const section4 = document.getElementById("day1-section-4");
  const section5 = document.getElementById("day1-section-5");
  const section6 = document.getElementById("day1-section-6");

  let parent4 = section4.parentNode
  let parent5 = section5.parentNode
  let parent6 = section6.parentNode


  section4.addEventListener("click", function() {

    parent4.style.borderBottom = '2px solid #081c15';
    parent5.style.borderBottom = 'none';
    parent6.style.borderBottom = 'none';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>08:00AM - 09:00AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>REGISTRATION, RECOGNITION OF VIPS & SPECIAL GUESTS</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  
  <article>
    <div class="container-fluid">
      <div class="row border-bottom-0">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>09:00PM - 09:30PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>RE -CAP OF PREVIOUS DAY’S DELIBERATIONS</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>`
  });

  section5.addEventListener("click", function() {

    parent4.style.borderBottom = 'none';
    parent5.style.borderBottom = '2px solid #081c15';
    parent6.style.borderBottom = 'none';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Sub-theme</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>CREATING NEW JOB OPPORTUNITIES THROUGH DEVELOPMENTAL REGULATION</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Topic:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>WHERE THE NEW JOBS WILL COME FROM?</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Presenter:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MR BIMBO ABIOYE</h4>
          <P>Chief Executive Officer FinTrak Software Company LLC Lagos</P>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Moderator:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MR RASHEED ADEJARE OLAOLUWA</h4>
          <p>Managing Director/CE Bank of Industry Abuja</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 1:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>DR MUHAMMED MUSA HAYATU</h4>
          <p>Senior Lecturer Dept of Library and Information Science ABU, Zaria.</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 2:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>JAYNE ABUO, ESQ.</h4>
          <p>Executive Director Digizens Collaborative Initiatives Abuja</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 3:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>ENGR YAU ISA GARBA</h4>
          <p>Managing Director X360 Systems and Automation Ltd</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 4:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MR JERRY ABUE</h4>
          <p>Director, Governor’s Department Central Bank of Nigeria Abuja.</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 5:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PROF SANI KUNYA, FNIOB</h4>
          <p>Abubakar Tafawa Balewa University Baushi</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 6:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>DR ABUBAKAR SAIDU</h4>
          <p>Chief Consultant Physician/Haematologist Federal Teaching Hospital Gombe</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>01:00PM - 01:45PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>LUNCH</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>01:45PM - 02:00PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>START-UP PITCHES</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>02:00PM - 03:00PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>CLOSING CEREMONY</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Chairman</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PERMANENT SECRETARY FEDERAL MINISTRY OF COMMUNICATIONS AND DIGITAL ECONOMY</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Presentations from NITDA</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>CLOSING CEREMONY</h4>
          <p>Nigerian Data Protection Regulation Presentation of Certificates to Data Protection 
            Compliance Organisations Unity Board (STEM EduTech Platform) Local Content</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>03:00PM - 04:00PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>COMMUNIQUÉ</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>04:00PM - 04:15PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>VOTE OF THANKS</h4>
          <p>Dr. Agu Collins Agu Director, Corporate Planning and Strategy Department & Chairman LOC,
             e-Nigeria Conference & Exhibition 2019</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row border-bottom-0">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>06:00PM - 09:00PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>DINNER/GALA NIGHT/ E-GOVERNMENT DIGITAL SERVICES PROMOTION AWARDS</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>`
  });

  section6.addEventListener("click", function() {

    parent4.style.borderBottom = 'none';
    parent5.style.borderBottom = 'none';
    parent6.style.borderBottom = '2px solid #081c15';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Sub-theme</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>CREATING AN INNOVATION ECOSYSTEM FOR SUSTAINABLE DIGITAL ECONOMY</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Topic:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>IDENTIFYING AND PROMOTING KEY ENABLERS OF THE NATIONAL INNOVATION ECOSYSTEM</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Presenter:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MR KOLA AINA</h4>
          <P>Venture Platform Abuja</P>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Moderator:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MR CHRIS ABHULIMEN</h4>
          <p>Nigeria Economic Summit Group (NESG) Abuja.</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 1:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>ZULAHA HADEJIA</h4>
          <p>Project Team Leader Gamdi Start-Up</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 2:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>DASER DAVID</h4>
          <p>Director General/CEO Plateau State ICT Development Agency Jos</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 3:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>
            HON ABIODUN SHOYEMI ESSIET</h4>
          <p>SA on ICT/Donor Agencies & Civil Societies Abuja Municipal Area Council</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 4:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>SEUN FOLORUNSO</h4>
          <p>Resource Manager FinTech Association of Nigeria</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clipboard2-check"></i>
            <p>Panelist 5:</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MR ADEYINKA ADEYEMI</h4>
          <p>Chairman, Intermarc Consulting Lagos.</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  
  <article>
    <div class="container-fluid">
      <div class="row border-bottom-0">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>11:00PM - 11:30PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>TEA BREAK</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>`
  });
});