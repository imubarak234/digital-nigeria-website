const day1 = document.getElementById('day-1');
const day2 = document.getElementById('day-2');
const day3 = document.getElementById('day-3');

const section = document.getElementById('sections-container');

const tables = document.getElementById('schedule');

const section1 = document.getElementById('day1-section-1');
const section2 = document.getElementById('day1-section-2');
const section3 = document.getElementById('day1-section-3');

const parent7 = section1.parentNode;
const parent8 = section2.parentNode;
const parent9 = section3.parentNode;

section1.addEventListener('click', () => {
  parent7.style.borderBottom = '2px solid #081c15';
  parent8.style.borderBottom = 'none';
  parent9.style.borderBottom = 'none';

  tables.innerHTML = `<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>COMPERE: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div class="w-100 text-start">
          <p>Mr Inye Kem Abonta</p>
          <p>Mrs Uwa Suleiman</p>
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
          <p>08:30AM - 09:00AM</p>
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
          <p>09:00AM - 09:55AM</p>
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
          <p>09:55AM - 10:00AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>RECOGNITION OF PARTICIPANTS</h4>
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
          <p>10:00AM - 10:15AM</p>
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
          <p>10:15AM - 10:25AM</p>
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
          <p>10:25AM - 10:30AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>KEYNOTE: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div class="w-100">
          <p class="text-start">Jimmy Nguyen CEO, Blockchain for All</p>
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
          <p>10:30AM - 10:35PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>KEYNOTE: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Deemah Yahya A. Alyahya; Secretary General Digital Coorperation Organisation</p>
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
          <p>10:35AM - 10:40AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>KEYNOTE: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <P>H.E. Mr Ousman A. Bah. Honorable Minister. Ministry of Communications and Digital Economy</P>
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
          <p>10:40AM - 11:20AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>KEYNOTE SPEAKER:</h4>
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
          <p>11:20AM - 11:40AM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>UNVEILING OF BOOKS: </h4>
        
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div>
          <P>"Skills Rather than Just Degrees"</P>
          <p>Isa Ali Ibrahim Pantami: Advancing Nigeria's Drive Towards a Digital Economy</p>                   
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
          <p>11:40PM - 11:45PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>VOTE OF THANKS</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Dr Alo Nwankwo, permanent Secretary Federal Ministry of Communications and Digital Economy</p>
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
          <p>11:45PM - 11:55PM</p>
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
          <p>11:55PM - 12:10PM</p>
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
          <p>12:10PM - 12:25PM</p>
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
          <p>12:25PM - 12:35PM</p>
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
</article>`;
});

section2.addEventListener('click', () => {
  parent7.style.borderBottom = 'none';
  parent8.style.borderBottom = '2px solid #081c15';
  parent9.style.borderBottom = 'none';

  tables.innerHTML = `<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p>12:45PM - 02:00PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PLENARY I</h4>
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
        <div class="d-flex flex-column">
          <p>Guest Speech: Saadia Zahiri - MD (World Economic Forum)</p>
          <p>Lead Speaker: Dr. Yele Okeremi - CEO PFS Transformation, ARM</p>
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
          <p>12:45PM - 01:05PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>LEAD SPEAKER: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Dr. Yele Okeremi - CEO PFS Transformation, ARM</p>
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
          <p>01:05PM - 01:50PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANEL DISCUSSION I: </h4>
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
        <i class="bi bi-check-circle"></i>
          
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>MODERATOR: </h4>
      </div>
      <div class="col-md-4 speaker-section text-start">
        <span class="sides"></span>
        <div class="w-100">
          <p class="text-start">Mr. Musa Ali Baba - PSI Global</p>
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
        <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLISTS </h4>
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
          <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 1: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Dr. Rislan Kanya - Deputy Vice Chancellor, Innovation and ICT Baze University</p>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 2: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Mr. Yusuf Bashir - CEO Satoshi Captial, Advisors & KICT Lab</p>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 3: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Dr. Wunmi Hassan - CEO HiTech Center for Women and Youth</p>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
        <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 4: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div class="d-flex flex-column">
          <p>DR Thuweba Diwani - Gesellschaft fuer internationale Zusammenarbeit (GIZ) GmbH.</p>
          <p>Designation: Head of Programme, Digital Transformation Center Nigeria</p>
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
        <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELIST 5: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div class="w-100">
          <p class="text-start">Dr. Nasir Ali Shinkafi - Galaxy Backbone</p>
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
          <p>01:50PM - 02:00PM</p>
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
          <p>02:00PM - 03:15PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PLENARY II</h4>
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
        <div class="d-flex flex-column">
          <p>Guest Speech: Paula Ingabire, Minister of ICT and Innovation, Rwanda</p>
          <p>Lead Speaker: Chinenya Mba-Uzoukwu : ISPON President</p>
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
          <p>02:00PM - 02:10PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>GUEST SPEECH: "COLLABORATION: A PATH TO DEVELOPING A DIGITAL INNOVATION ECOSYSTEM"</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Bilal AL-Rais: Vice President - Technology and Digital Cluster, Dubai World Trade Center (DWTC) Dubai, UAE</p>
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
          <p>02:10PM - 02:20PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>LEAD SPEAKER: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Dr. Yele Okeremi - CEO PFS Transformation, ARM</p>
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
          <p>02:20PM - 03:05PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANEL DISCUSSION II: </h4>
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
        <i class="bi bi-check-circle"></i>
          
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>MODERATOR: </h4>
      </div>
      <div class="col-md-4 speaker-section text-start">
        <span class="sides"></span>
        <div class="w-100">
          <p class="text-start">Mrs. Adaeze Sokan - UK Nigeria Tech Hub</p>
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
        <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLISTS </h4>
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
          <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 1: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div class="w-100">
          <p class="text-start">Dawn Dimowo - Public Policy Lead, Google</p>
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
          <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 2: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Dr. Amina Sambo Magaji - Ag. Director, Digital Literacy & Capacity Development, NITDA</p>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 3: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div class="w-100">
          <p class="text-start">Dr. Segun Aina OFR - FinTech Association of Nigeria</p>
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
        <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 4: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div class="w-100">
          <p class="text-start">Rex Abitogun FNCS - CEO Managment Edge</p>
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
        <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELIST 5: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div class="w-100">
          <p class="text-start">Representative NCC</p>
        </div>
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
          <p>03:05PM - 03:15PM</p>
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
`;
});

section3.addEventListener('click', () => {
  parent7.style.borderBottom = 'none';
  parent8.style.borderBottom = 'none';
  parent9.style.borderBottom = '2px solid #081c15';

  tables.innerHTML = `<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-clock px-2"></i>
          <p>03:15PM - 03:35PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PLENARY III</h4>
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
        <h4>DATA PROTECTION AND NATIONAL SECURITY: HARNESSING DATA TO SOLVE INSECURITY PROBLEMS IN NIGERIA</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div class="d-flex flex-column">
          <p>Speaker I: Dr. Vincent O. Olatunji - NC/CEO National Data Protection Bureau (NDPB)</p>
          <p>Speaker II: Basil Udotai - Managing Partner Technology Advisor</p>
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
          <p>03:35PM - 04:20PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANEL DISCUSSION III: </h4>
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
        <i class="bi bi-check-circle"></i>
          
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>MODERATOR: </h4>
      </div>
      <div class="col-md-4 speaker-section text-start">
        <span class="sides"></span>
        <p>General Samuel Akinsode - Office of the National Security Adviser (ONSA)</p>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
        <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLISTS </h4>
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
          <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 1: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Olawale Popoola - Project Coordinator, Nigeria Digital Identification for Development (ID4D) Project</p>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
          <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 2: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div class="w-100">
          <p class="text-start">Mr Smith Osemeke - MD/CEO Unitellas International Limited</p>
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
          <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 3: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Hadiza Dagabna - Director Legal, National Identity Management Commission</p>
      </div>
    </div>
  </div>
</article>
<article>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 time-section">
        <div class="d-flex">
        <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELLIST 4: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <div class="w-100">
          <p class="text-start">Sholinka Shodunke CIO MTN</p>
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
        <i class="bi bi-check-circle"></i>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>PANELIST 5: </h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        <p>Dr Mbanaso HOD Cybersecurity Center, Nasarawa State University.</p>
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
          <p>04:20PM - 04:30PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>QUESTIONS AND ANSWERS TWO (2) RAPPORTEURS: </h4>
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
          <p>04:30PM</p>
        </div> 
      </div>
      <div class="col-md-5 title-section">
        <h4>DINNER</h4>
      </div>
      <div class="col-md-4 speaker-section">
        <span class="sides"></span>
        
      </div>
    </div>
  </div>
</article>`;
});

day1.addEventListener('click', () => {
  section.innerHTML = `<li>
  <button id="day1-section-1">SESSION 1</button>
  </li>
  <li>
    <button id="day1-section-2">SESSION 2</button>
  </li>
  <li>
    <button id="day1-section-3">SESSION 3</button>
  </li>`;

  const section11 = document.getElementById('day1-section-1');
  const section12 = document.getElementById('day1-section-2');
  const section13 = document.getElementById('day1-section-3');

  const parent1 = section11.parentNode;
  const parent2 = section12.parentNode;
  const parent3 = section13.parentNode;

  section11.addEventListener('click', () => {
    parent1.style.borderBottom = '2px solid #081c15';
    parent2.style.borderBottom = 'none';
    parent3.style.borderBottom = 'none';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>COMPERE: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100 text-start">
            <p>Mr Inye Kem Abonta</p>
            <p>Mrs Uwa Suleiman</p>
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
            <p>08:30AM - 09:00AM</p>
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
            <p>09:00AM - 09:55AM</p>
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
            <p>09:55AM - 10:00AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>RECOGNITION OF PARTICIPANTS</h4>
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
            <p>10:00AM - 10:15AM</p>
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
            <p>10:15AM - 10:25AM</p>
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
            <p>10:25AM - 10:30AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>KEYNOTE: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Jimmy Nguyen CEO, Blockchain for All</p>
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
            <p>10:30AM - 10:35PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>KEYNOTE: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Deemah Yahya A. Alyahya; Secretary General Digital Coorperation Organisation</p>
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
            <p>10:35AM - 10:40AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>KEYNOTE: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <P>H.E. Mr Ousman A. Bah. Honorable Minister. Ministry of Communications and Digital Economy</P>
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
            <p>10:40AM - 11:20AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>KEYNOTE SPEAKER:</h4>
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
            <p>11:20AM - 11:40AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>UNVEILING OF BOOKS: </h4>
          
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div>
            <P>"Skills Rather than Just Degrees"</P>
            <p>Isa Ali Ibrahim Pantami: Advancing Nigeria's Drive Towards a Digital Economy</p>                   
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
            <p>11:40PM - 11:45PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>VOTE OF THANKS</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Dr Alo Nwankwo, permanent Secretary Federal Ministry of Communications and Digital Economy</p>
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
            <p>11:45PM - 11:55PM</p>
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
            <p>11:55PM - 12:10PM</p>
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
            <p>12:10PM - 12:25PM</p>
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
            <p>12:25PM - 12:35PM</p>
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
  </article>`;
  });

  section12.addEventListener('click', () => {
    parent1.style.borderBottom = 'none';
    parent2.style.borderBottom = '2px solid #081c15';
    parent3.style.borderBottom = 'none';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>12:45PM - 02:00PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PLENARY I</h4>
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
          <div class="d-flex flex-column">
            <p>Guest Speech: Saadia Zahiri - MD (World Economic Forum)</p>
            <p>Lead Speaker: Dr. Yele Okeremi - CEO PFS Transformation, ARM</p>
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
            <p>12:45PM - 01:05PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>LEAD SPEAKER: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Dr. Yele Okeremi - CEO PFS Transformation, ARM</p>
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
            <p>01:05PM - 01:50PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION I: </h4>
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
          <i class="bi bi-check-circle"></i>
            
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MODERATOR: </h4>
        </div>
        <div class="col-md-4 speaker-section text-start">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Mr. Musa Ali Baba - PSI Global</p>
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
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLISTS </h4>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 1: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Dr. Rislan Kanya - Deputy Vice Chancellor, Innovation and ICT Baze University</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 2: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Mr. Yusuf Bashir - CEO Satoshi Captial, Advisors & KICT Lab</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 3: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Dr. Wunmi Hassan - CEO HiTech Center for Women and Youth</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 4: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="d-flex flex-column">
            <p>DR Thuweba Diwani - Gesellschaft fuer internationale Zusammenarbeit (GIZ) GmbH.</p>
            <p>Designation: Head of Programme, Digital Transformation Center Nigeria</p>
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
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELIST 5: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Dr. Nasir Ali Shinkafi - Galaxy Backbone</p>
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
            <p>01:50PM - 02:00PM</p>
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
            <p>02:00PM - 03:15PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PLENARY II</h4>
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
          <div class="d-flex flex-column">
            <p>Guest Speech: Paula Ingabire, Minister of ICT and Innovation, Rwanda</p>
            <p>Lead Speaker: Chinenya Mba-Uzoukwu : ISPON President</p>
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
            <p>02:00PM - 02:10PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GUEST SPEECH: "COLLABORATION: A PATH TO DEVELOPING A DIGITAL INNOVATION ECOSYSTEM"</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Bilal AL-Rais: Vice President - Technology and Digital Cluster, Dubai World Trade Center (DWTC) Dubai, UAE</p>
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
            <p>02:10PM - 02:20PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>LEAD SPEAKER: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Dr. Yele Okeremi - CEO PFS Transformation, ARM</p>
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
            <p>02:20PM - 03:05PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION II: </h4>
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
          <i class="bi bi-check-circle"></i>
            
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MODERATOR: </h4>
        </div>
        <div class="col-md-4 speaker-section text-start">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Mrs. Adaeze Sokan - UK Nigeria Tech Hub</p>
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
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLISTS </h4>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 1: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Dawn Dimowo - Public Policy Lead, Google</p>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 2: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Dr. Amina Sambo Magaji - Ag. Director, Digital Literacy & Capacity Development, NITDA</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 3: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Dr. Segun Aina OFR - FinTech Association of Nigeria</p>
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
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 4: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Rex Abitogun FNCS - CEO Managment Edge</p>
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
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELIST 5: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Representative NCC</p>
          </div>
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
            <p>03:05PM - 03:15PM</p>
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
  </article>`;
  });

  section13.addEventListener('click', () => {
    parent1.style.borderBottom = 'none';
    parent2.style.borderBottom = 'none';
    parent3.style.borderBottom = '2px solid #081c15';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>03:15PM - 03:35PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PLENARY III</h4>
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
          <h4>DATA PROTECTION AND NATIONAL SECURITY: HARNESSING DATA TO SOLVE INSECURITY PROBLEMS IN NIGERIA</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="d-flex flex-column">
            <p>Speaker I: Dr. Vincent O. Olatunji - NC/CEO National Data Protection Bureau (NDPB)</p>
            <p>Speaker II: Basil Udotai - Managing Partner Technology Advisor</p>
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
            <p>03:35PM - 04:20PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION III: </h4>
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
          <i class="bi bi-check-circle"></i>
            
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MODERATOR: </h4>
        </div>
        <div class="col-md-4 speaker-section text-start">
          <span class="sides"></span>
          <p>General Samuel Akinsode - Office of the National Security Adviser (ONSA)</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLISTS </h4>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 1: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Olawale Popoola - Project Coordinator, Nigeria Digital Identification for Development (ID4D) Project</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 2: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Mr Smith Osemeke - MD/CEO Unitellas International Limited</p>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 3: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Hadiza Dagabna - Director Legal, National Identity Management Commission</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 4: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Sholinka Shodunke CIO MTN</p>
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
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELIST 5: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Dr Mbanaso HOD Cybersecurity Center, Nasarawa State University.</p>
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
            <p>04:20PM - 04:30PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>QUESTIONS AND ANSWERS TWO (2) RAPPORTEURS: </h4>
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
            <p>04:30PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>DINNER</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          
        </div>
      </div>
    </div>
  </article>`;
  });
});

day2.addEventListener('click', () => {
  section.innerHTML = `<li>
  <button id="day1-section-4">SESSION ONE</button>
  </li>
  <li>
    <button id="day1-section-5">SESSION TWO</button>
  </li>
  <li>
    <button id="day1-section-6">SESSION THREE</button>
  </li>`;

  const section4 = document.getElementById('day1-section-4');
  const section5 = document.getElementById('day1-section-5');
  const section6 = document.getElementById('day1-section-6');

  const parent4 = section4.parentNode;
  const parent5 = section5.parentNode;
  const parent6 = section6.parentNode;

  section4.addEventListener('click', () => {
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
          <h4>DAY TWO BLOCKCHAIN SUMMIT</h4>
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
          <h4>WELCOMING/REGISTRATION</h4>
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
            <p>09:00AM - 09:45AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>RED CARPET/ARRIVAL, RECOGNITION OF VIPs & SPECIAL GUESTS</h4>
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
            <p>09:45AM - 09:50AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>OPENING REMARKS</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Kashifu Inuwa Abdullahi CCIE, DG NITDA</p>
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
            <p>09:50AM - 10:00AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>TEA BREAK/NETWORKING</h4>
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
            <p>10:00AM - 02:15PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PLENARY I</h4>
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
            <p>10:00AM - 10:05AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>BRIEF HIGHLIGHTS OF THE BLOCKCHAIN DAY</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <P>Mr. Mohammed Ibrahim Jega Co-Founder, Domineum Blockchain Solutions Limited</P>
          <p>Compere: Mr David Olumuyiwa Dada</p>
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
            <p>10:05AM - 10:25AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>KEYNOTE SPEAKER 1: "BLOCKCHAIN FOR DIGITAL TRANSFORMATION"</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Ray Sharma - General Partner, Pacer Ventures</p>
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
            <p>10:25AM - 10:45AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>KEYNOTE SPEAKER 2: "BLOCKCHAIN FOR GOVERNMENT & SMART CITIES"</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Ahmed Yousif - Lead of BSV Blockchain for Government Initiative Middle East, BSV Blockchain</p>
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
            <p>10:45AM - 11:00AM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GUEST SPEAKER 1: "BLOCKCHAIN FOR YOUTH EMPOWERMENT"</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Ray Youssef - Founder/CEO of Paxful</p>
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
            <p>11:00AM - 11:45PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION I: </h4>
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
          <h4>IMPACT OF BLOCKCHAIN ON A DIGITAL ECONOMY: THE MYTH, THE TRUTH AND THE OPPORTUNITIES</h4>
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
          <i class="bi bi-check-circle"></i>
            
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MODERATOR: </h4>
        </div>
        <div class="col-md-4 speaker-section text-start">
          <span class="sides"></span>
          <p>Faith Titus Okafor Mbah - Founder/CEO, Sonergy Data Technologies & Co-Founder Blockchain Nigeria User Group.</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
          <i class="bi bi-check-circle"></i>
            
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>LEAD SPEAKER: </h4>
        </div>
        <div class="col-md-4 speaker-section text-start">
          <span class="sides"></span>
          <p>Dr Usman Gambo Abdullahi - Director, IT Infrastructure Solutions, NITDA</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLISTS </h4>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 1: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Ray Youssef - Founder/CEO of Paxful</p>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 2: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Raad Aswani - Group Managing Advisor, TradelandFX Holding Ltd.</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 3: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Dr. Ibrahim Dauda - President PVG Consult</p>
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
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 4: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Ahmed Yousif - Lead of BSV Blockchain for Government Initiative Middle East, BSV Blockchain</p>
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
            <p>11:45PM - 11:55PM</p>
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
  
  `;
  });

  section5.addEventListener('click', () => {
    parent4.style.borderBottom = 'none';
    parent5.style.borderBottom = '2px solid #081c15';
    parent6.style.borderBottom = 'none';

    tables.innerHTML = `
    <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>11:55PM - 12:10PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GUEST SPEAKER 2: "BLOCKCHAIN PAYMENTS AND REMITTANCE FOR AFRICA"</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Lorien Gamaroff - Founder/CEO, Centbee</p>
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
            <p>12:10PM - 12:25PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GUEST SPEAKER 3: "BLOCKCHAIN FOR EDUCATION: SOCIAL AND FINANCIAL INCLUSION FOR NIGERIAN YOUTHS"</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">James L. Sisneros - Founder & CEO, The Possibility Company</p>
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
            <p>12:25PM - 01:10PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANEL DISCUSSION II: </h4>
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
          <i class="bi bi-check-circle"></i>
            
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MODERATOR: </h4>
        </div>
        <div class="col-md-4 speaker-section text-start">
          <span class="sides"></span>
          <p>Senator Ihenyen - President, Stakeholders in Blockchain Technology Association of Nigeria (SiBAN).</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
          <i class="bi bi-check-circle"></i>
            
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>LEAD SPEAKER: </h4>
        </div>
        <div class="col-md-4 speaker-section text-start">
          <span class="sides"></span>
          <p>Saminu Salisu - CTO, Bilic.io</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLISTS </h4>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 1: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Chimezie Chuta - Founder, Blockchain Nigeria User Group</p>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 2: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Jennifer Chizua - CEO Startprenuers</p>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 3: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Salisu Uba - Founder/Managing Partner, NatQuest Limited</p>
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
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PANELLIST 4: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Saeed Mohammed Ali Alhebsi - Advisor AI & Snr Project Mngr, UAE Ministry of HR & Emiratisation</p>
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
            <p>01:10PM - 01:20PM</p>
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
            <p>01:20PM - 01:40PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>SPECIAL GUEST SPEAKER: "ONE WORLD CONNECTED WITH BLOCKCHAIN"</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <p>Jimmey Nguyen - CEO, Blockchain for All; Co-Founder & Former President, BSV Blockchain Association</p>
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
            <p>01:40PM - 02:15PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>LUNCH BREAK</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          
        </div>
      </div>
    </div>
    </article>
  `;
  });

  section6.addEventListener('click', () => {
    parent4.style.borderBottom = 'none';
    parent5.style.borderBottom = 'none';
    parent6.style.borderBottom = '2px solid #081c15';

    tables.innerHTML = `<article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
            <i class="bi bi-clock px-2"></i>
            <p>02:15PM - 04:55PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PLENARY II</h4>
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
            <p>02:15PM - 02:25PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>INAUGURATION OF BLOCKCHAIN CAMPUS AMBASSADORS</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <P>Calistus Igwilo - Country CTO for Domineum Blockchain Solutions Ltd.</P>
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
            <p>02:25PM - 02:35PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>SIGNING OF NATIONAL BLOCKCHAIN AND METAVERSE POLICY</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <P>Simit Naik - Director, Commercial & Strategy, nChain</P>
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
            <p>02:35PM - 02:45PM</p>
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
            <p>02:45PM - 03:00PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>INTERLUDE: DRAMA PIECE - EVOLUTION OF BLOCKCHAIN TECHNOLOGY IN NIGERIA IN THE FORM OF A STORY.</h4>
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
            <p>03:00PM - 03:15PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>FIRESIDE CHAT I: </h4>
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
          <h4>DIGITAL TRANSFORMATION: A PATH TO SUSTAINABLE DIGITAL ECONOMY</h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div>
            <p>Guest 1: Jimmy Nguyen - CEO, Blockchain for All; Co-Founder & Former President, BSV Blockchain Association</p>
            <p>Guest 2: Tajuddeen Dantata - CEO, Dantata Foods & Allied Products Nigeria.</p>
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
            <p>03:15PM - 03:20PM</p>
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
            <p>03:20PM - 04:00PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>FIRESIDE CHAT II: </h4>
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
          <h4>BLOCKCHAIN FOR THE FINTECH REVOLUTION: A CASE STUDY OF E-NAIRA</h4>
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
          <i class="bi bi-check-circle"></i>
            
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>MODERATOR: </h4>
        </div>
        <div class="col-md-4 speaker-section text-start">
          <span class="sides"></span>
          <p>Nwabishop Tony Emeka - Founder Crypto Tvplus</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
          <i class="bi bi-check-circle"></i>
            
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>LEAD SPEAKER: </h4>
        </div>
        <div class="col-md-4 speaker-section text-start">
          <span class="sides"></span>
          <p>Olufemi Balogun - Co Founder/CEO PayVantage Limited</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 time-section">
          <div class="d-flex">
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GUESTS </h4>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GUEST 1: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Franklin Peters - Executive Director, Boundless Nexus Ltd</p>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GUEST 2: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Jeffrey Williams Edem - Fintech Business Growth Expert</p>
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
            <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GUEST 3: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Bello Kano - Founder, Bello Kano</p>
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
          <i class="bi bi-check-circle"></i>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>GUEST 4: </h4>
        </div>
        <div class="col-md-4 speaker-section">
          <span class="sides"></span>
          <div class="w-100">
            <p class="text-start">Michael Simeon - CEO, Vpd money</p>
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
            <p>04:00PM - 04:10PM</p>
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
            <p>04:10PM - 04:20PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>PRESENTATION OF GIFT FOR SPEAKERS/PARTICIPATING ATTENDEES</h4>
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
            <p>04:20PM - 04:25PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>CLOSING REMARK/VOTE OF THANKS BY DR. ARISTOTLE ONUMO, NITDA</h4>
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
            <p>04:25PM - 04:55PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>ONE-ON-ONE INTERACTIVE WORKSHOP BETWEEN SPEAKERS & ATTENDEES</h4>
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
            <p>04:55PM</p>
          </div> 
        </div>
        <div class="col-md-5 title-section">
          <h4>DEPARTURE</h4>
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
  </article>
  `;
  });
});
day3.addEventListener('click', () => {
  section.innerHTML = `<li>
  <button id="day3-section-7">SESSION ONE</button>
  </li>
  <li>
    <button id="day3-section-8">SESSION TWO</button>
  </li>
  <li>
    <button id="day3-section-9">SESSION THREE</button>
  </li>`;

  const section7 = document.getElementById('day3-section-7');
  const section8 = document.getElementById('day3-section-8');
  const section9 = document.getElementById('day3-section-9');

  const parent4 = section7.parentNode;
  const parent5 = section8.parentNode;
  const parent6 = section9.parentNode;

  section7.addEventListener('click', () => {
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
  </article>`;
  });

  section8.addEventListener('click', () => {
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
  </article>`;
  });

  section9.addEventListener('click', () => {
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
            <p>02:30PM - 02:40PM</p>
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
            <p>02:40PM - 02:50PM</p>
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
            <p>02:50PM - 03:00PM</p>
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
            <p>03:00PM - 03:05PM</p>
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
            <p>03:05PM - 03:15PM</p>
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
            <p>03:15PM - 03:45PM</p>
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
            <p>03:45AM - 03:50PM</p>
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
  </article>`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      //elem.classList.add("first","second","third");
      let navs = document.getElementById('naver')
      navs.classList.add('navbar-dark', 'bg-dark', 'dark-background');
      navs.classList.remove('navbar-light', 'bg-light', 'white-background');
      navs.innerHTML = `<div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="./images/digital_Nigeria_logo.png" alt="main logo header" width="113" height="90">
      </a>
      <button class="hambugers" type="button" id="nav-hambuger">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="#081c15" class="bi bi-card-text" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
          <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      <div class="inner-navs w-auto" >
        <ul class="nav w-auto mb-2 mb-lg-0 d-flex justify-content-evenly fw-bolder">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#dignitaries" title="Dignitaries">DIGNITARIES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#register">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#agenda">SCHEDULE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#patners">SPONSORS</a>
          </li>
        </ul>
        <form class="position-relative w-auto" id="header-form">
          <input class="form-control me-2 border-top-0 border-end-0 border-start-0" type="search" placeholder="Search" aria-label="Search">
          <button class="position-absolute" type="submit"><i class="bi bi-search"></i></button>
        </form>
        <a href="https://www.digitalnigeria.gov.ng/register" class="btn" id="reg" target="_blank">REGISTER</a>
      </div>
    </div>`;

      this.document.getElementById('up-button').innerHTML = `<a href="#carouselInterval" class="">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#2d6a4f" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
      </svg>
        </a>`;
      // add padding top to show content behind navbar

      const mobileButton = document.getElementById('nav-hambuger');

      mobileButton.addEventListener('click', () => {

        const mobile = document.getElementById('mobile');
        mobile.classList.add('blocks');
        mobile.classList.remove('displays');

        let mobileLinks = document.querySelector("#mobile .container .mobile-menu").querySelectorAll('.nav-link');
        console.log(mobileLinks)
        Array.prototype.slice.call(mobileLinks)
        .forEach((e) => {
          console.log(e);
          e.addEventListener('click', () => {
            mobile.classList.add('displays');
            mobile.classList.remove('blocks');
            console.log("working");
          });
        });

        const closeButton = document.getElementById('close-button');

        closeButton.addEventListener('click', () => {
          mobile.classList.add('displays');
          mobile.classList.remove('blocks');
        
        });
      });
      // navbar_height = document.querySelector('.navbar').offsetHeight;
      // document.body.style.paddingTop = navbar_height + 'px';
    } else {
        let navs = document.getElementById('naver')
        navs.classList.remove('navbar-dark', 'bg-dark', 'dark-background');
        navs.classList.add('navbar-light', 'bg-light', 'white-background');
        navs.innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="./images/digital_Nigeria_logo3.png" alt="main logo header" width="113" height="90">
        </a>
        <button class="hambuger" type="button" id="nav-hambuger">
          <!-- <span class="navbar-toggler-icon"></span> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="#081c15" class="bi bi-card-text" viewBox="0 0 16 16">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
            <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        <div class="inner-nav w-auto" >
          <ul class="nav w-auto mb-2 mb-lg-0 d-flex justify-content-evenly fw-bolder">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#dignitaries" title="Dignitaries">DIGNITARIES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#register">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#agenda">SCHEDULE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#patners">SPONSORS</a>
            </li>
          </ul>
          <form class="position-relative w-auto" id="header-form">
            <input class="form-control me-2 border-top-0 border-end-0 border-start-0" type="search" placeholder="Search" aria-label="Search">
            <button class="position-absolute" type="submit"><i class="bi bi-search"></i></button>
          </form>
          
        </div>
      </div>`;

      this.document.getElementById('up-button').innerHTML = '';
      // remove padding top from body
      // carouselInterval

      const mobileButton = document.getElementById('nav-hambuger');

      mobileButton.addEventListener('click', () => {

        const mobile = document.getElementById('mobile');
        mobile.classList.add('blocks');
        mobile.classList.remove('displays');

        let mobileLinks = document.querySelector("#mobile .container .mobile-menu").querySelectorAll('.nav-link');
        console.log(mobileLinks)
        Array.prototype.slice.call(mobileLinks)
        .forEach((e) => {
          console.log(e);
          e.addEventListener('click', () => {
            mobile.classList.add('displays');
            mobile.classList.remove('blocks');
            console.log("working");
          });
        });

        const closeButton = document.getElementById('close-button');

        closeButton.addEventListener('click', () => {
          mobile.classList.add('displays');
          mobile.classList.remove('blocks');
        
        });
      });
    }
  });
});


// navLinks.forEach((l) => {
//   l.addEventListener('click', () => { bsCollapse.toggle(); });
// });




// Mobile menu 

const mobileButton = document.getElementById('nav-hambuger');

mobileButton.addEventListener('click', () => {

  const mobile = document.getElementById('mobile');
  mobile.classList.add('blocks');
  mobile.classList.remove('displays');

  let mobileLinks = document.querySelector("#mobile .container .mobile-menu").querySelectorAll('.nav-link');
  console.log(mobileLinks)
  Array.prototype.slice.call(mobileLinks)
  .forEach((e) => {
    console.log(e);
    e.addEventListener('click', () => {
      mobile.classList.add('displays');
      mobile.classList.remove('blocks');
      console.log("working");
    });
  });

  const closeButton = document.getElementById('close-button');

  closeButton.addEventListener('click', () => {
    mobile.classList.add('displays');
    mobile.classList.remove('blocks');
  
  });
});