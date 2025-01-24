/************************************************************
 * 1) ALL_COURSES + Bixiu Logic
 ************************************************************/

/** The full list of available courses (from your original data). */
const RAW_COURSES = [
    // Period 1
    "Biology, CP",
    "Geometry, Honors",
    "Instrumental Music I (Fall) / Instrumental Music II(Spring)",
    "Chemistry, Honors",
    "Modern World History, CP",
    "Financial Literacy (Fall)/ Intro to Business (Spring)",
    "SAT English (Spring)",
    "SAT Math (Fall)/SAT Math (Spring)",
    "English 11, Honors",
    "PE/Health (Fall) / PE/Health (Spring)",
    "Spanish IV, Honors",
    "Arabic III & IV, Honors",
    "Essay Writing for Seniors (Fall)",
    "AP Statistics",
    "Cybersecurity",
  
    // Period 2
    "Algebra I",
    "Geometry, CP",
    "Graphic Design - Full Year",
    "Modern World History, CP",
    "English 10, Honors",
    "Honors Precalculus",
    "Spanish III, Honors",
    "Anatomy and Physiology",
    "Instrumental Music I (Fall) / Instrumental Music II(Spring)",
    "National & International Current Affairs (Fall) / Public Speaking (Spring)",
    "English 12, CP",
    "AP US History",
    "Broadcast Media Production",
    "Dynamic Programming",
  
    // Period 3
    "Spanish I /Arabic I /Turkish I / Chinese I / French I (Independent Study with a Supervisor)",
    "English 9, Honors",
    "Digital Visual Art (Fall) / Cultivating Creativity (Spring)",
    "Instrumental Music I (Fall) / Instrumental Music II(Spring)",
    "English 10, CP",
    "AP Precalculus",
    "Chemistry, CP",
    "Web Development I (Fall)/Web Development II",
    "Sociology of the Future (Fall) / Global Issues (Spring)",
    "Precalculus, CP",
    "National & International Current Affairs (Fall) / Public Speaking (Spring)",
    "PE/Health (Fall) / PE/Health (Spring)",
    "AP English Language & Composition",
    "Calculus",
    "AP Physics I",
  
    // Period 4
    "US History, CP",
    "Biology, Honors",
    "PE/Health (Fall) / PE/Health (Spring)",
    "Spanish II, Honors",
    "Arabic II, CP",
    "Instrumental Music I (Fall) / Instrumental Music II(Spring)",
    "English 11",
    "AP Computer Science A",
    "AP Chemistry",
    "Financial Literacy (Fall)/ Intro to Business (Spring)",
    "Juniors Only with cumulative unweighted GPA 3.75 and above",
    "Seniors Only Independent Online Courses with a Supervisor (Fall) / Independent Online Courses with a Supervisor (Spring)",
    "Intro to World Religions, Mythology, and Belief Systems I (Fall) / Intro to World Religions, Mythology, and Belief",
    "Sociology (Fall)/Anthropology(Spring)",
  
    // Period 5
    "PE/Health (Fall) / PE/Health (Spring)",
    "English 9, Honors",
    "Pencil and Ink Illustration (Fall) / Drawing and Painting (Spring)",
    "US History, Honors",
    "Chemistry, CP",
    "Computer Programming I (Fall) / Computer Programming II (Spring)",
    "AP Biology",
    "AP Psychology",
    "Physics, CP/Honors",
    "AP Comparative Government and Politics",
    "Entrepreneurship / Marketing",
    "Precalculus, CP",
    "Calculus",
    "AP Calculus AB",
    "Principles of Business (Fall)/ Project Management (Spring)",
  
    // Period 7
    "English 9, CP",
    "US History, Honors",
    "Biology, Honors",
    "Algebra II",
    "Modern World History, Honors",
    "Pencil and Ink Illustration (Fall) / Drawing and Painting (Spring)",
    "English 10, CP",
    "AP US Government and Politics",
    "AP Macroeconomics",
    "AP Computer Science Principles",
    "Principles of Engineering (Fall)\nArchitectural CAD (Spring)",
    "Environmental Science",
    "English 12, Honors",
    "Honors Probability & Statistics",
  
    // Period 8
    "Digital Visual Art (Fall) / Animated Thinking (Spring)",
    "Instrumental Music I (Fall) / Instrumental Music II(Spring)",
    "Honors Spanish I",
    "Geometry, CP",
    "Algebra 2, Honors",
    "PE/Health (Fall) / PE/Health (Spring)",
    "Cultural Studies I/ Cultural Studies II",
    "Forensic Science (Fall)/ Introduction to Organic Chemistry (Spring)",
    "AP European History",
    "English 11, Honors",
    "AP Microeconomics",
    "AP Calculus BC",
    "English 12, Honors",
  ];
  
  const ALL_COURSES = Array.from(new Set(RAW_COURSES)).sort();
  
  /************************************************************
   * 2) Course-level and subject classification
   ************************************************************/
  function getCourseLevel(courseName) {
    const lower = courseName.toLowerCase();
    if (lower.includes("ap ")) return "ap";
    if (lower.includes("honors")) return "honors";
    if (lower.includes("cp") || lower.includes("college prep")) return "cp";
    return "standard";
  }
  
  function getCategory(courseName) {
    const lower = courseName.toLowerCase();
    // 0 => Math
    if (
      lower.includes("algebra") ||
      lower.includes("geometry") ||
      lower.includes("calculus") ||
      lower.includes("precalculus") ||
      lower.includes("statistics") ||
      lower.includes("sat math")
    ) {
      return 0;
    }
    // 1 => English
    if (
      lower.includes("english") ||
      lower.includes("literature") ||
      lower.includes("essay writing")
    ) {
      return 1;
    }
    // 2 => Science
    if (
      lower.includes("biology") ||
      lower.includes("chemistry") ||
      lower.includes("physics") ||
      lower.includes("science") ||
      lower.includes("anatomy") ||
      lower.includes("forensic") ||
      lower.includes("environmental")
    ) {
      return 2;
    }
    // 3 => Social
    if (
      lower.includes("history") ||
      lower.includes("government") ||
      lower.includes("politics") ||
      lower.includes("sociology") ||
      lower.includes("anthropology") ||
      lower.includes("cultural studies") ||
      lower.includes("world religions") ||
      lower.includes("global issues") ||
      lower.includes("comparative government") ||
      lower.includes("macroeconomics") ||
      lower.includes("microeconomics") ||
      lower.includes("psychology") ||
      lower.includes("current affairs")
    ) {
      return 3;
    }
    // 4 => Finance
    if (
      lower.includes("financial") ||
      lower.includes("business") ||
      lower.includes("entrepreneurship") ||
      lower.includes("marketing") ||
      lower.includes("econ")
    ) {
      return 4;
    }
    // 5 => PE
    if (lower.includes("pe/health") || lower.includes("physical education")) {
      return 5;
    }
    // 6 => Art
    if (
      lower.includes("art") ||
      lower.includes("music") ||
      lower.includes("illustration") ||
      lower.includes("drawing") ||
      lower.includes("pencil and ink") ||
      lower.includes("visual") ||
      lower.includes("broadcast") ||
      lower.includes("instrumental") ||
      lower.includes("painting") ||
      lower.includes("sculpture") ||
      lower.includes("ceramics") ||
      lower.includes("theater") ||
      lower.includes("cultivating creativity") ||
      lower.includes("graphic design")
    ) {
      return 6;
    }
    // 7 => World Lang
    if (
      lower.includes("spanish") ||
      lower.includes("arabic") ||
      lower.includes("turkish") ||
      lower.includes("chinese") ||
      lower.includes("french")
    ) {
      return 7;
    }
    // 8 => 21C
    if (
      lower.includes("computer programming") ||
      lower.includes("web development") ||
      lower.includes("cybersecurity") ||
      lower.includes("dynamic programming") ||
      lower.includes("principles of engineering") ||
      lower.includes("architectural cad") ||
      lower.includes("ap computer science")
    ) {
      return 8;
    }
    return -1;
  }
  
  const CATEGORY_LABELS = [
    "Math",
    "English",
    "Science",
    "Social Studies",
    "Finance/Business",
    "PE",
    "Art/Music",
    "World Language",
    "21st Century",
  ];
  
  /** The original requirement array. */
  const REQUIR_YEAR_ORIGINAL = [3, 4, 3, 3, 1, 2, 1, 2, 1];
  
  /************************************************************
   * 3) Group the deduplicated courses => subject => level
   ************************************************************/
  function groupCoursesBySubjectLevel() {
    // 9 subject buckets
    const grouped = [];
    for (let i = 0; i < 9; i++) {
      grouped.push({ ap: [], honors: [], cp: [], standard: [], other: [] });
    }
  
    // Fill them
    for (const course of ALL_COURSES) {
      const cat = getCategory(course);
      if (cat === -1) continue; // skip if unknown
      const lvl = getCourseLevel(course);
      // if no key found, push to 'other'
      if (grouped[cat][lvl]) grouped[cat][lvl].push(course);
      else grouped[cat].other.push(course);
    }
    return grouped;
  }
  
  /************************************************************
   * 4) Build the 9 subject panels + 1 final panel
   ************************************************************/
  function buildPanels() {
    const container = document.getElementById("panelContainer");
    if (!container) return;
  
    const grouped = groupCoursesBySubjectLevel();
    // For each subject index 0..8 => make a panel
    for (let i = 0; i < 9; i++) {
      const panel = document.createElement("div");
      panel.className = "subject-panel";
  
      const title = document.createElement("h2");
      title.textContent = CATEGORY_LABELS[i];
      panel.appendChild(title);
  
      const levelOrder = ["ap", "honors", "cp", "standard", "other"];
      const levelLabels = {
        ap: "AP Courses",
        honors: "Honors Courses",
        cp: "CP / College Prep",
        standard: "Standard Courses",
        other: "Other",
      };
  
      for (const lvl of levelOrder) {
        const arr = grouped[i][lvl];
        if (!arr || arr.length === 0) continue;
  
        // label
        const lvlDiv = document.createElement("div");
        lvlDiv.className = "level-label";
        lvlDiv.textContent = levelLabels[lvl];
        panel.appendChild(lvlDiv);
  
        // table with 1 col for Course, 4 cols for 9..12
        const table = document.createElement("table");
        table.className = "course-table";
  
        const thead = document.createElement("thead");
        thead.innerHTML = `
          <tr>
            <th>Course</th>
            <th>9th</th>
            <th>10th</th>
            <th>11th</th>
            <th>12th</th>
          </tr>
        `;
        table.appendChild(thead);
  
        const tbody = document.createElement("tbody");
        for (const course of arr) {
          const row = document.createElement("tr");
  
          // course name cell
          const nameTd = document.createElement("td");
          nameTd.className = "course-name";
          nameTd.textContent = course;
          row.appendChild(nameTd);
  
          // 4 checkboxes for grades 9..12
          [9,10,11,12].forEach((grade) => {
            const td = document.createElement("td");
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.value = `${course}::${grade}`;
            td.appendChild(cb);
            row.appendChild(td);
          });
          tbody.appendChild(row);
        }
        table.appendChild(tbody);
        panel.appendChild(table);
      }
      container.appendChild(panel);
    }
  
    // final panel => index=9
    const finalPanel = document.createElement("div");
    finalPanel.className = "subject-panel final-panel";
  
    const finalTitle = document.createElement("h2");
    finalTitle.textContent = "Check Requirements";
    finalPanel.appendChild(finalTitle);
  
    const finalDesc = document.createElement("p");
    finalDesc.textContent =
      "Please make your selections in the previous panels, then click below to see how many years remain in each category, as well as details for science and social studies sub-requirements.";
    finalPanel.appendChild(finalDesc);
  
    const checkBtn = document.createElement("button");
    checkBtn.className = "check-btn";
    checkBtn.textContent = "Check Requirements";
    checkBtn.addEventListener("click", checkRequirements);
    finalPanel.appendChild(checkBtn);
  
    const resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    resultsDiv.className = "results";
    finalPanel.appendChild(resultsDiv);
  
    container.appendChild(finalPanel);
  }
  
  /************************************************************
   * 5) Slider Navigation
   ************************************************************/
  let currentPanelIndex = 0;
    const maxPanelIndex = 9; // 0..8 => subjects, 9 => final

    function goToPanel(index) {
    if (index < 0) index = 0;
    if (index > maxPanelIndex) index = maxPanelIndex;
    currentPanelIndex = index;

    const container = document.getElementById("panelContainer");
    if (!container) return;

    // Each panel "occupies" 90vw total (80vw content + 5vw margin each side).
    container.style.transform = `translateX(-${currentPanelIndex * 90}vw)`;

    // Show/hide arrows
    const leftArrow = document.getElementById("leftArrowBtn");
    const rightArrow = document.getElementById("rightArrowBtn");

    if (currentPanelIndex === 0) {
        leftArrow.style.display = "none";
    } else {
        leftArrow.style.display = "block";
    }
    if (currentPanelIndex === maxPanelIndex) {
        rightArrow.style.display = "none";
    } else {
        rightArrow.style.display = "block";
    }
    }

    function goNextPanel() {
    goToPanel(currentPanelIndex + 1);
    }
    function goPrevPanel() {
    goToPanel(currentPanelIndex - 1);
    }
  
  /************************************************************
   * 6) Bixiu Logic
   ************************************************************/
  function isLifeScience(name) {
    const lower = name.toLowerCase();
    return lower.includes("biology") || lower.includes("anatomy");
  }
  function isPhysicalScience(name) {
    const lower = name.toLowerCase();
    return (
      lower.includes("chemistry") ||
      lower.includes("physics") ||
      lower.includes("environmental")
    );
  }
  function isWorldHistory(name) {
    return name.toLowerCase().includes("world history");
  }
  function isUSHistory(name) {
    return name.toLowerCase().includes("us history");
  }
  
  function calculateYearsLeft(takenCourses) {
    const requirYear = [...REQUIR_YEAR_ORIGINAL];
    const scienceSubs = [1, 1, 1]; // life, physical, third
    let physicalCount = 0;
    const socialSubs = [1, 1, 1];  // world, us, third
  
    let error = null;
    for (const c of takenCourses) {
      const cat = getCategory(c);
      if (cat === -1) {
        error = `Course not recognized: "${c}"`;
        break;
      }
      if (requirYear[cat] > 0) {
        requirYear[cat]--;
      }
  
      // science
      if (cat === 2) {
        if (isLifeScience(c)) {
          if (scienceSubs[0] > 0) scienceSubs[0]--;
          else if (scienceSubs[2] > 0) scienceSubs[2]--;
        } else if (isPhysicalScience(c)) {
          physicalCount++;
          if (physicalCount === 1) {
            if (scienceSubs[1] > 0) scienceSubs[1]--;
            else if (scienceSubs[2] > 0) scienceSubs[2]--;
          } else {
            // 2nd or more
            if (scienceSubs[0] === 0 && scienceSubs[1] === 0 && scienceSubs[2] > 0) {
              scienceSubs[2]--;
            }
          }
        } else {
          // other => third
          if (scienceSubs[2] > 0) scienceSubs[2]--;
        }
      }
      // social
      if (cat === 3) {
        if (isWorldHistory(c)) {
          if (socialSubs[0] > 0) socialSubs[0]--;
          else if (socialSubs[2] > 0) socialSubs[2]--;
        } else if (isUSHistory(c)) {
          if (socialSubs[1] > 0) socialSubs[1]--;
          else if (socialSubs[2] > 0) socialSubs[2]--;
        } else {
          // other => third
          if (socialSubs[2] > 0) socialSubs[2]--;
        }
      }
    }
  
    if (error) return { error };
  
    const results = requirYear.map((yrs, i) => ({
      subject: CATEGORY_LABELS[i],
      yearsLeft: yrs,
    }));
  
    // science
    const [life, phys, thr] = scienceSubs;
    let scienceMsg = "";
    if (life > 0 || phys > 0 || thr > 0) {
      scienceMsg = "Science sub-req not fully met:\n";
      if (life > 0) scienceMsg += `  - ${life} year(s) Life Science\n`;
      if (phys > 0) scienceMsg += `  - ${phys} year(s) Physical Science\n`;
      if (thr > 0) scienceMsg += `  - ${thr} year(s) 3rd Science\n`;
    } else {
      scienceMsg = "Science sub-req satisfied (1 Life + 1 Physical + 1 Third).";
    }
  
    // social
    const [w, u, t] = socialSubs;
    let socialMsg = "";
    if (w > 0 || u > 0 || t > 0) {
      socialMsg = "Social Studies sub-req not fully met:\n";
      if (w > 0) socialMsg += `  - ${w} year(s) World History\n`;
      if (u > 0) socialMsg += `  - ${u} year(s) US History\n`;
      if (t > 0) socialMsg += `  - ${t} year(s) other Social Studies\n`;
    } else {
      socialMsg = "Social Studies sub-req satisfied (1 World + 1 US + 1 Third).";
    }
  
    return { results, scienceMsg, socialMsg };
  }
  
  /** 
   * checkRequirements() => gather all checkboxes that are checked,
   * parse out the courseName, add to a set => no duplication => run logic 
   */
  function checkRequirements() {
    const checkboxes = document.querySelectorAll(".subject-panel input[type='checkbox']");
    const courseSet = new Set();
  
    checkboxes.forEach((cb) => {
      if (cb.checked) {
        const [courseName, grade] = cb.value.split("::");
        courseSet.add(courseName.trim());
      }
    });
  
    const takenCourses = Array.from(courseSet);
    const outcome = calculateYearsLeft(takenCourses);
  
    const resultsDiv = document.getElementById("results");
    if (!resultsDiv) return;
  
    if (outcome.error) {
      resultsDiv.innerHTML = `<div class="error">${outcome.error}</div>`;
      return;
    }
  
    let html = "<h2>Requirements Results</h2>";
    html += "<ul>";
    outcome.results.forEach((r) => {
      html += `<li><strong>${r.subject}:</strong> ${r.yearsLeft} year(s) left</li>`;
    });
    html += "</ul>";
  
    html += "<h3>Science Breakdown</h3>";
    html += `<pre>${outcome.scienceMsg}</pre>`;
  
    html += "<h3>Social Studies Breakdown</h3>";
    html += `<pre>${outcome.socialMsg}</pre>`;
  
    resultsDiv.innerHTML = html;
  }
  
  /************************************************************
   * 7) Start up
   ************************************************************/
  window.addEventListener("DOMContentLoaded", () => {
    buildPanels();
    goToPanel(0);
  
    // arrow listeners
    document.getElementById("leftArrowBtn").addEventListener("click", goPrevPanel);
    document.getElementById("rightArrowBtn").addEventListener("click", goNextPanel);
  });
  