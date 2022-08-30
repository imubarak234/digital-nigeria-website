
const day1 = document.getElementById("day-1");
const day2 = document.getElementById("day-2");
const day3 = document.getElementById("day-3");

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
          <p>08:30AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>REGISTRATION OF PARTICIPANTS</h4>
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
          <p>09:00AM</p>
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
          <p>09:55AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>ARRIVAL OF MR. PRESIDENT, GCFR & HIS ENTOURAGE</h4>
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
          <p>10:00AM</p>
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
          <p>10:15AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>OPENING SPEECH AND PROGRAM HIGHLIGHT</h4>
        
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div>
          <p>Kashifu Inuwa Adbullahi</p>
          <p>Director-General, National Information Technology Development Agency</p>
        </div>
        
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
          <p>10:30AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>WELCOME ADDRESS</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div>
          <p>Prof. Isa Ali Ibrahim (Pantami) <span>FNCS, FBCS, FIIM, MCPN</span> </p>

          <p>Hon. Minister, Federal Ministry of Communications and Digital Economy.</p>
        </div>
        
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
          <p>10:50AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>KEYNOTE ADDRESS</h4>
        
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <P>"An overview of Digital Transformation: A Path to Sustainable Digital Economy"</P>
        <p>Funke Opeke MD Main one</p>
        <p>Juliet Ehiueman Chiazor Country Manager, Google Nigeria</p>
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
          <p>11:20AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>OFFICIAL OPENING ADDRESS BY SPECIAL GUEST OF HONOUR</h4>
        
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>President Muhammadu Buhari, GCFR Commander in Chief, Federal Republic of Nigeria</p>
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
          <p>12:00PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>VOTE OF THANKS</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div>
          <p>By Mr Alor Nwankwo</p>
          <p>Permanent Secretary Federal Ministry of Communication and Digital Economy</p>
        </div>

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
          <p>12:10PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>EXHIBITION/MINI TOUR OF EXHIBITION BOOTHS</h4>
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
          <p>12:25PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>GROUP PHOTOGRAPH</h4>
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
          <p>12:30PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>DEPARTURE OF MR. PRESIDENT AND ENTOURAGE</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
      </div>
    </div>
  </div>
</article>
<div id="patners-title"></div>
<article>
  <div class="container-fluid">
    <div class="row border-bottom-0">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p>12:35PM</p>
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
          <i class="bi bi-clock px-2"></i>
          <p>01:15PM - 02:00PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANEL DISCUSSION I</h4>
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
        <h4>ACHIEVING INCLUSIVE GROWTH IN THE FACE OF DIGITAL TRANSFORMATION AND THE FUTURE OF WORK.</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div>
          <h4>Mr. Ino Alogwu (Lead Presenter)</h4>
          <p>Director Digital Transformation, ARM</p>
        </div>
        
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
        <h4>MR. MUSA ALI BABA</h4>
        <p>CEO, Tearsea Pay</p>
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
        <h4>MR. YUSUF BASHIR</h4>
        <p>CEO Satoshi Capital Advisors & KICT Lab</p>
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
        <h4>DR RISLAN KANYA</h4>
        <p>Deputy Vice Chancellor Innovation and ICT Baze University</p>
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
        <h4>DR AMINA SAMBO MAGAJI</h4>
        <p>Deputy Director, Digital Economy Department, NITDA</p>
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
        <h4>MRS. ABIODUN OSOBA</h4>
        <p>CEO, Agile Advisor</p>
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
          <p>02:00PM - 02:10PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>QUESTIONS AND ANSWERS</h4>
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
          <i class="bi bi-clock px-2"></i>
          <p>02:10PM - 02:55PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANEL DISCUSSION II</h4>
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
        <h4>DRIVING GROWTH AND UNLOCKING INNOVATIONS THROUGH REGULATIONS FOR A SUSTAINABLE DIGITAL ECONOMY.</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div>
          <h4>Dr. Segun Aina OFR</h4>
          <p>FinTech Association of Nigeria (Lead Presenter)</p>
        </div>
        
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
        <h4>MRS. ADAEZE SOKAN</h4>
        <p>UK Nigeria Tech Hub</p>
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
        <h4>MRS. TITI AKINSAMI</h4>
        <p>Public Policy Lead, Google</p>
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
        <h4>REP NCC</h4>
        
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
        <h4>TAOPHEEK BABAYEJU </h4>
        <p>MD ICENTRAL</p>
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
        <h4>YELE OKEREMI</h4>
        <p>MD/CEO PFS</p>
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
          <p>02:55PM - 03:05PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>QUESTIONS AND ANSWERS</h4>
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
          <p>03:05PM - 03:50PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANEL DISCUSSION III</h4>
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
        <h4>DATA PROTECTION AND NATIONAL SECURITY: HERNESSING DATA TO SOLVE INSECURITY PROBLEMS IN NIGERIA..</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div>
          <h4>BASIL UDONTAI (Lead Presenter)</h4>
        </div>
        
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
        <h4>GENERAL DR. AKINSODE</h4>
        <p>Rep from Office of the National Security Advisor(NDPB)</p>
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
        <h4>DR. VINCENT O. OLATUNJI</h4>
        <p>NC/CEO National Data Protection Bureau (NDPB)</p>
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
        <h4>REP NIMC</h4>
        
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
        <h4>SOLOMON ODOLE </h4>
        <p>Project Coordinator, Nigeria Digital Identification for Developmen (ID4D) Project</p>
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
        <h4>REP. FROM NIGERIAN IMMIGRATION SERVICE (NIS)</h4>
        <p>MD/CEO PFS</p>
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
          <p>03:50PM - 04:00PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>QUESTIONS AND ANSWERS</h4>
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
          <p>04:00PM</p>
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
            <p>08:30AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>REGISTRATION OF PARTICIPANTS</h4>
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
            <p>09:00AM</p>
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
            <p>09:55AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>ARRIVAL OF MR. PRESIDENT, GCFR & HIS ENTOURAGE</h4>
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
            <p>10:00AM</p>
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
            <p>10:15AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>OPENING SPEECH AND PROGRAM HIGHLIGHT</h4>
          
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div>
            <p>Kashifu Inuwa Adbullahi</p>
            <p>Director-General, National Information Technology Development Agency</p>
          </div>
          
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
            <p>10:30AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>WELCOME ADDRESS</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div>
            <p>Prof. Isa Ali Ibrahim (Pantami) <span>FNCS, FBCS, FIIM, MCPN</span> </p>

            <p>Hon. Minister, Federal Ministry of Communications and Digital Economy.</p>
          </div>
          
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
            <p>10:50AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>KEYNOTE ADDRESS</h4>
          
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <P>"An overview of Digital Transformation: A Path to Sustainable Digital Economy"</P>
          <p>Funke Opeke MD Main one</p>
          <p>Juliet Ehiueman Chiazor Country Manager, Google Nigeria</p>
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
            <p>11:20AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>OFFICIAL OPENING ADDRESS BY SPECIAL GUEST OF HONOUR</h4>
          
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>President Muhammadu Buhari, GCFR Commander in Chief, Federal Republic of Nigeria</p>
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
            <p>12:00PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>VOTE OF THANKS</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div>
            <p>By Mr Alor Nwankwo</p>
            <p>Permanent Secretary Federal Ministry of Communication and Digital Economy</p>
          </div>

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
            <p>12:10PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>EXHIBITION/MINI TOUR OF EXHIBITION BOOTHS</h4>
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
            <p>12:25PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GROUP PHOTOGRAPH</h4>
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
            <p>12:30PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>DEPARTURE OF MR. PRESIDENT AND ENTOURAGE</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
        </div>
      </div>
    </div>
  </article>
  <div id="patners-title"></div>
  <article>
    <div class="container-fluid">
      <div class="row border-bottom-0">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>12:35PM</p>
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
  <div id="patners-title"></div>
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
  <div id="patners-title"></div>
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
            <p>26th OCTOBER 2022</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>DAY TWO BLOCKCHAIN DAY</h4>
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
            <p>08:00AM - 09:00AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>REGISTRATION, RECOGNITION OF VIPs & SPECIAL GUESTS</h4>
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
            <p>09:00AM - 09-30AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>RE-CAP OF PREVIOUS DAY'S DELIBRATIONS</h4>
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
            <p>10:00PM - 10:45PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION I</h4>
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
          <h4>BLOCKCHAIN DISRUPTION AND SMART CONTRACTS: IMPLICATION FOR THE NIGERIAN TECH ECOSYSTEM</h4>
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
            <p>10:45AM - 10:55AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>QUESTIONS AND ANSWERS</h4>
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
            <i class="bi bi-clock px-2"></i>
            <p>10:55PM - 11:40PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION II</h4>
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
          <h4>IMPACT OF CRYPTOCURRENCIES ON THE NIGERIAN ECONOMY AND THE INTRODUCTION OF THE ENAIRA</h4>
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
            <p>11:40PM - 11:50PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>QUESTIONS AND ANSWERS</h4>
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
            <p>11:50PM - 12:35PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION III</h4>
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
          <h4>VALUE PROPOSITION AND VIABILITY OF BLOCKCHAIN REGULATIONS TOWARDS BUILDING A DIGITAL NIGERIA</h4>
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
            <p>12:35PM - 12:45PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>QUESTIONS AND ANSWERS</h4>
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
            <p>12:45PM - 01:45PM</p>
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

  section6.addEventListener("click", function() {

    parent4.style.borderBottom = 'none';
    parent5.style.borderBottom = 'none';
    parent6.style.borderBottom = '2px solid #081c15';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>01:45PM - 02:30PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION IV</h4>
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
          <h4>PRIORITIZING BLOCKCHAIN TECHNOLOGY: IMPLICATION FOR DIGITAL ASSET INNOVATION</h4>
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
            <p>02:30PM - 02:40PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>QUESTIONS AND ANSWERS</h4>
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
            <p>02:40PM - 03:25PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION V</h4>
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
          <h4>CURRENCY CONTROLLERS AND CRYPTO TAX: POLICY IMERATIVE FOR A DIGITAL NIGERIA.</h4>
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
            <p>03:35PM - 03:35PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>QUESTIONS AND ANSWERS</h4>
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
            <p>03:35PM - 04:15PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>SHORT BREAK</h4>
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
            <p>04:15PM - 05:00PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION VI</h4>
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
          <h4>THE FUTURE OF CRYPTO CURRENCY IN NIGERIA.</h4>
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
            <p>05:00PM - 05:10PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>QUESTIONS AND ANSWERS</h4>
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
            <p>06:00PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GALA/AWARD NIGHT</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          
        </div>
      </div>
    </div>
  </article>`
  });
});
day3.addEventListener("click", function(){
  section.innerHTML = `<li>
  <button id="day3-section-7">SESSION I</button>
  </li>
  <li>
    <button id="day3-section-8">SESSION II</button>
  </li>
  <li>
    <button id="day3-section-9">SESSION III</button>
  </li>`

  const section7 = document.getElementById("day3-section-7");
  const section8 = document.getElementById("day3-section-8");
  const section9 = document.getElementById("day3-section-9");

  let parent4 = section7.parentNode
  let parent5 = section8.parentNode
  let parent6 = section9.parentNode


  section7.addEventListener("click", function() {

    parent4.style.borderBottom = '2px solid #081c15';
    parent5.style.borderBottom = 'none';
    parent6.style.borderBottom = 'none';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>27th OCTOBER 2022</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>INNOVATION ECOSYSTEM DAY</h4>
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
            <p>08:00AM - 09:00AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>REGISTRATION, RECOGNITION OF VIPs & SPECIAL GUESTS</h4>
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
            <p>09:00AM - 10-00AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>TEA/COFFE</h4>
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
            <p>10:00PM - 10:45PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION I</h4>
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
          <h4>INNOVATION EXPLORATION IN CREATING DIGITAL ENTERPRISES FOR THE NIGERIAN START-UP ECOSYSTEM</h4>
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
          <h4>NNEKA UKAY</h4>
          <p>CEO, ISN Hubs</p>
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
          <h4>BADE ALUKO</h4>
          <p>Partner, White Hibiscus</p>
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
          <h4>DAMILOLA TEIDI</h4>
          <p>Director, Startup Support CC-Hub</p>
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
          <h4>FAIZ BASHIR</h4>
          <p>CEO, FlexiSAF</p>
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
          <h4>MARYAM GWADABE</h4>
          <p>Founder, Blue Sapphire Hub</p>
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
            <p>10:30AM - 10:40AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>QUESTIONS AND ANSWERS</h4>
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
            <p>10:40AM - 11:40AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>START-UP PITCH & PRESENTATIONS</h4>
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
          
        </div>
        <div class="col-md-5 title-section">
          <h4>NOMINATED START-UP</h4>
          <p>by ONDI - NITDA</p>
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
          
        </div>
        <div class="col-md-5 title-section">
          <h4>NOMINATED START-UP</h4>
          <p>by Venture Platform</p>
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
          
        </div>
        <div class="col-md-5 title-section">
          <h4>NOMINATED START-UP</h4>
          <p>by CC-Hub</p>
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
           
        </div>
        <div class="col-md-5 title-section">
          <h4>PRESENTATIONS</h4>
          <p>by MIT REAP</p>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          
        </div>
      </div>
    </div>
  </article>`
  });

  section8.addEventListener("click", function() {

    parent4.style.borderBottom = 'none';
    parent5.style.borderBottom = '2px solid #081c15';
    parent6.style.borderBottom = 'none';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>11:40AM - 12:40PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION II</h4>
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
          <h4>TECHNOPRENEURSHIP, INNOVATION AND SYNERGY FOR A DIGITAL ECONOMY</h4>
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
          <h4>KASIM A. SODANGI</h4>
          <p>Head Compliance, Smile Identity</p>
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
          <h4>OSWALD GUOBADIA</h4>
          <p>SA to the President, Digital Transformation</p>
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
          <h4>CHARLES EMEMBOLU</h4>
          <p>Roar Nigeria Hun</p>
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
          <h4>DARE ODUMADE</h4>
          <p>Founder, Chekkit</p>
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
          <i class="bi bi-clock px-2"></i>
          12:40PM
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

  section9.addEventListener("click", function() {

    parent4.style.borderBottom = 'none';
    parent5.style.borderBottom = 'none';
    parent6.style.borderBottom = '2px solid #081c15';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            
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
            <i class="bi bi-clock px-2"></i>
            <p>02:30PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>DELEGATES ARE SEATED</h4>
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
            <p>02:40PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MEMBER OF THE DIPLOMATIC COMMUNITY & INVITED GUESTS ARE SEATED</h4>
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
            <p>02:50PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>ARRIVAL OF PROF. ISA ALI IBRAHIM (PANTAMI)</h4>
          <P>Honourable Minister, Federal Ministry of Communication and Digital Economy</P>
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
            <p>03:00PM</p>
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
            <p>03:05PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>WELCOME ADDRESS BY KASHIFU INUWA ABDULLAHI</h4>
          <p>CCIE. Director General/CEO, NITDA</p>
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
            <p>03:15PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>READING OF THE FINAL COMMUNIQUE</h4>
          <p>Federal Ministry of Communications and Digital Economy</p>
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
            <p>03:45AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>VOTE OF THANKS</h4>
          
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
            <p>03:50PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>CLOSING AND DEPARTURE</h4>
          
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          
        </div>
      </div>
    </div>
  </article>`
  });
});

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        // elem.classList.add("first","second","third");
        // let navs = document.getElementById('naver')
        // navs.classList.add('navbar-dark', 'bg-dark');
        // navs.classList.remove('navbar-light', 'bg-light');
        // navs.innerHTML = `<div class="container">
        // <a class="navbar-brand" href="#">
        //   <img src="./images/digital_Nigeria_logo.png" alt="" width="93" height="70">
        // </a>
        // <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //   <span class="navbar-toggler-icon"></span>
        // </button>
        // <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
        //   <ul class="navbar-nav me-auto ms-3 mb-2 mb-lg-0 d-flex justify-content-evenly fw-bolder">
        //     <li class="nav-item">
        //       <a class="nav-link active" aria-current="page" href="/">HOME</a>
        //     </li>
        //     <li class="nav-item">
        //       <a class="nav-link" href="#register">ABOUT</a>
        //     </li>
        //     <li class="nav-item">
        //       <a class="nav-link" href="#dignitaries">DIGNITARIES</a>
        //     </li>
        //     <li class="nav-item">
        //       <a class="nav-link" href="#agenda">SCHEDULE</a>
        //     </li>
        //     <li class="nav-item">
        //       <a class="nav-link" href="#patners">SPONSORS</a>
        //     </li>
        //   </ul>
          
        //   <form class="d-flex w-25 position-relative" id="header-form">
        //     <input class="form-control me-2 border-top-0 border-end-0 border-start-0" type="search" placeholder="Search" aria-label="Search">
        //     <button class="position-absolute" type="submit"><i class="bi bi-search"></i></button>
        //   </form>
  
        //   <a href="https://www.digitalnigeria.gov.ng/register/register.html" class="btn" id="reg" target="_blank">REGISTER NOW</a>`;

          this.document.getElementById("up-button").innerHTML = `<a href="#carouselInterval" class="">
          <img src="./images/arrow-up-circle.svg" alt="" width="50" height="50" class="img-fluid">
        </a>`;
        // add padding top to show content behind navbar
        //navbar_height = document.querySelector('.navbar').offsetHeight;
        //document.body.style.paddingTop = navbar_height + 'px';
      } else {
      //   let navs = document.getElementById('naver')
      //   navs.classList.remove('navbar-dark', 'bg-dark');
      //   navs.classList.add('navbar-light', 'bg-light');
      //   navs.innerHTML = `<div class="container">
      //   <a class="navbar-brand" href="#">
      //     <img src="./images/digital_Nigeria_logo3.png" alt="" width="93" height="70">
      //   </a>
      //   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>
      //   <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
      //     <ul class="navbar-nav me-auto ms-3 mb-2 mb-lg-0 d-flex justify-content-evenly fw-bolder">
      //       <li class="nav-item">
      //         <a class="nav-link active" aria-current="page" href="/">HOME</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#dignitaries">DIGNITARIES</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#agenda">SCHEDULE</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#register">ABOUT</a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#patners">SPONSORS</a>
      //       </li>
      //     </ul>
      //     <form class="d-flex w-25 position-relative" id="header-form">
      //       <input class="form-control me-2 border-top-0 border-end-0 border-start-0" type="search" placeholder="Search" aria-label="Search">
      //       <button class="position-absolute" type="submit"><i class="bi bi-search"></i></button>
      //     </form>
          
      //   </div>
      // </div>`;

      this.document.getElementById("up-button").innerHTML = ``;
         // remove padding top from body
        // carouselInterval
      } 
  });
}); 

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

// var vidElement0 = document.getElementById('video0');
// var vidElement1 = document.getElementById('video1');
// var vidElement2 = document.getElementById('video2');


//     var vidSource0 = "./video/video(1).mp4";
//     var vidSource1 = "./video/video(2).mp4";
//     var vidSource2 = "./video/video(3).mp4";
    
//     vidElement0.src = vidSource0;
//     vidElement1.src = vidSource1;
//     vidElement2.src = vidSource2;
    
//     var vidRandom = document.getElementById("video0");
    
//     vidRandom.style.display = "block";
   

   
//     vidElement0.addEventListener('ended', function(e) {
//     vidElement1.play();
   
//     vidElement0.style.display = "none";
//      vidElement1.style.display = "block";
// });

  //   vidElement1.addEventListener('ended', function(e) {
  //   vidElement2.play();
    
  //   vidElement1.style.display = "none";
  //   vidElement2.style.display = "block";
  // });
  
  //   vidElement2.addEventListener('ended', function(e) {
  //   vidElement0.play();
    
  //   vidElement2.style.display = "none";
  //   vidElement0.style.display = "block";
  // });
  
    