var lessonDropdown;
var title1text;
var title2text;
var unitDropdown;
var pagesDropdown;



function getLessonLinks() {

	if (unitNo == 0) {
		lessonDropdown = '<li><a href="../../gettingstarted/00_00/00_00_01.htm" title="Getting Started">Getting Started</a></li>';
	}
	else if (unitNo == 1) {
		lessonDropdown = '<li><a href="../../citizenship/01_00/01_00_01.htm" title="Introduction">Introduction</a></li><li><a href="../../citizenship/01_01/01_01_01.htm" title="How Do We Define the United States?">Lesson One</a></li><li><a href="../../citizenship/01_02/01_02_01.htm" title="What Is Culture?">Lesson Two</a></li><li><a href="../../citizenship/01_03/01_03_01.htm" title="What Can Maps Tell Us?">Lesson Three</a></li><li><a href="../../citizenship/01_04/01_04_01.htm" title="How Are Citizenship and Ecology Connected?">Lesson Four</a></li><li><a href="../../citizenship/01_05/01_05_01.htm" title="What Is a U.S. Citizen?">Lesson Five</a></li><li><a href="../../citizenship/01_06/01_06_01.htm" title="What Is Effective Citizenship?">Lesson Six</a></li><li><a href="../../citizenship/01_07/01_07_01.htm" title="Who Shows Great Citizenship? (Advanced)">Lesson Seven: Advanced</a></li><li><a href="../../citizenship/01_08/01_08_01.htm" title="Review">Lesson Eight</a></li><li><a href="../../citizenship/01_09/01_09_01.htm" title="Unit Exam">Lesson Nine</a></li>';
	}
	else if (unitNo == 2) {
		lessonDropdown = '<li><a href="../../foundations/02_00/02_00_01.htm" title="Introduction">Introduction</a></li><li><a href="../../foundations/02_01/02_01_01.htm" title="Who Influenced the Founding Fathers?">Lesson One</a></li><li><a href="../../foundations/02_02/02_02_01.htm" title="Which Important Documents Influenced America?">Lesson Two</a></li><li><a href="../../foundations/02_03/02_03_01.htm" title="Why Is the Declaration of Independence Important?">Lesson Three</a></li><li><a href="../../foundations/02_04/02_04_01.htm" title="What Is the Intent of the Constitution?">Lesson Four</a></li><li><a href="../../foundations/02_05/02_05_01.htm" title="How Do the Branches of Government Work?">Lesson Five</a></li><li><a href="../../foundations/02_06/02_06_01.htm" title="How Are the Powers Balanced?">Lesson Six</a></li><li><a href="../../foundations/02_07/02_07_01.htm" title="How Are Rights Protected?">Lesson Seven</a></li><li><a href="../../foundations/02_08/02_08_01.htm" title="How Can the Constitution Change?">Lesson Eight</a></li><li><li><a href="../../foundations/02_09/02_09_01.htm" title="What Should Be the Next Amendment? (Advanced)">Lesson Nine: Advanced</a></li><li><a href="../../foundations/02_10/02_10_01.htm" title="Review">Lesson Ten</a></li><li><a href="../../foundations/02_11/02_11_01.htm" title="Unit Exam">Lesson Eleven</a></li>';
	}
	else if (unitNo == 3) {
		lessonDropdown = '<li><a href="../../sharingpower/03_00/03_00_01.htm" title="Introduction">Introduction</a></li><li><a href="../../sharingpower/03_01/03_01_01.htm" title="What Is Federalism?">Lesson One</a></li><li><a href="../../sharingpower/03_02/03_02_01.htm" title="How Are States Governed?">Lesson Two</a></li><li><a href="../../sharingpower/03_03/03_03_01.htm" title="What Is Rule of Law?">Lesson Three</a></li><li><a href="../../sharingpower/03_04/03_04_01.htm" title="How Are Laws Made?">Lesson Four</a></li><li><a href="../../sharingpower/03_05/03_05_01.htm" title="Does Lawmaking Shape Society? (Advanced)">Lesson Five: Advanced</a></li><li><a href="../../sharingpower/03_06/03_06_01.htm" title="How Do the Courts Work?">Lesson Six</a></li><li><a href="../../sharingpower/03_07/03_07_01.htm" title="How Does a Jury Trial Ensure Justice?">Lesson Seven</a></li><li><a href="../../sharingpower/03_08/03_08_01.htm" title="How Can We Solve Local Problems?">Lesson Eight</a></li><li><a href="../../sharingpower/03_09/03_09_01.htm" title="Review">Lesson Nine</a></li><li><a href="../../sharingpower/03_10/03_10_01.htm" title="Unit Exam">Lesson Ten</a></li>';	
	}
	else if (unitNo == 4) {
		lessonDropdown = '<li><a href="../../activecitizens/04_00/04_00_01.htm" title="Introduction">Introduction</a></li><li><a href="../../activecitizens/04_01/04_01_01.htm" title="How Do Citizen Perspectives Differ?">Lesson One</a></li><li><a href="../../activecitizens/04_02/04_02_01.htm" title="What is Judicial Review?">Lesson Two</a></li><li><a href="../../activecitizens/04_03/04_03_01.htm" title="How Can Art Inspire Action? (Advanced)">Lesson Three: Advanced</a></li><li><a href="../../activecitizens/04_04/04_04_01.htm" title="What Are the Rights of the Accused?">Lesson Four</a></li><li><a href="../../activecitizens/04_05/04_05_01.htm" title="What Are the Rights of Speech?">Lesson Five</a></li><li><a href="../../activecitizens/04_06/04_06_01.htm" title="How Can We Influence Government?">Lesson Six</a></li><li><a href="../../activecitizens/04_07/04_07_01.htm" title="How Do Elections Impact Society?">Lesson Seven</a></li><li><a href="../../activecitizens/04_08/04_08_01.htm" title="What Are Demographics?">Lesson Eight</a></li><li><a href="../../activecitizens/04_09/04_09_01.htm" title="Review">Lesson Nine</a></li><li><a href="../../activecitizens/04_10/04_10_01.htm" title="Unit Exam">Lesson Ten</a></li>';	
	}
	else if (unitNo == 5) {
		lessonDropdown = '<li><a href="../../americanmoney/05_00/05_00_01.htm" title="Introduction">Introduction</a></li><li><a href="../../americanmoney/05_01/05_01_01.htm" title="How Does Scarcity Affect Us?">Lesson One</a></li><li><a href="../../americanmoney/05_02/05_02_01.htm" title="What Are Incentives?">Lesson Two</a></li><li><a href="../../americanmoney/05_03/05_03_01.htm" title="What Is the Role of Competition?">Lesson Three</a></li><li><a href="../../americanmoney/05_04/05_04_01.htm" title="How Does Banking Work?">Lesson Four</a></li><li><a href="../../americanmoney/05_05/05_05_01.htm" title="Why Should We Pay Taxes?">Lesson Five</a></li><li><a href="../../americanmoney/05_06/05_06_01.htm" title="What Are the Priorities? (Advanced)">Lesson Six: Advanced</a></li><li><a href="../../americanmoney/05_07/05_07_01.htm" title="How Does Borrowing Money Affect Us?">Lesson Seven</a></li><li><a href="../../americanmoney/05_08/05_08_01.htm" title="Review">Lesson Eight</a></li><li><a href="../../americanmoney/05_09/05_09_01.htm" title="Unit Exam">Lesson Nine</a></li>';	
	}
	else if (unitNo == 6) {
		lessonDropdown = '<li><a href="../../goingglobal/06_00/06_00_01.htm" title="Introduction">Introduction</a></li><li><a href="../../goingglobal/06_01/06_01_01.htm" title="How Do Other Nations Govern?">Lesson One</a></li><li><a href="../../goingglobal/06_02/06_02_01.htm" title="How Does Geography Affect Society?">Lesson Two</a></li><li><a href="../../goingglobal/06_03/06_03_01.htm" title="Why Should Nations Diversify?">Lesson Three</a></li><li><a href="../../goingglobal/06_04/06_04_01.htm" title="What&#39;s New in the World? (Advanced)">Lesson Four: Advanced</a></li><li><a href="../../goingglobal/06_05/06_05_01.htm" title="How Does Currency Affect Trade?">Lesson Five</a></li><li><a href="../../goingglobal/06_06/06_06_01.htm" title="How Do We Participate in a World Community?">Lesson Six</a></li><li><a href="../../goingglobal/06_07/06_07_01.htm" title="What&lsquo;s the News?">Lesson Seven</a></li><li><a href="../../goingglobal/06_08/06_08_01.htm" title="Review">Lesson Eight</a></li><li><a href="../../goingglobal/06_09/06_09_01.htm" title="Unit Exam">Lesson Nine</a></li>';	
	}
	else if (unitNo == 7) {
		lessonDropdown = '<li><a href="../../servicelearning/07_00/07_00_01.htm" title="Service Learning">Service Learning</a></li>';	
	}
	$(document).ready(function() {
$("body").css("background-image","url('../../imgs/bgBody"+ unitNo +".png')");
	$("dl#lessons dd ul").empty().append(lessonDropdown);
	
	});
}


function getLessonTitles() {
	if (unitNoLesNo == 0000) {
		title1text = 'Getting Started';
		title2text = '';
	}
	else if (unitNoLesNo == 0100) {
		title1text = 'Citizenship—';
		title2text = 'Introduction';
	}	
	else if (unitNoLesNo == 0101) {
		title1text = 'Citizenship Lesson One—';
		title2text = 'How Do We Define the United States?';
	}
	else if (unitNoLesNo == 0102) {
		title1text = 'Citizenship Lesson Two—';
		title2text = 'What Is Culture?';
	}
	else if (unitNoLesNo == 0103) {
		title1text = 'Citizenship Lesson Three—';
		title2text = 'What Can Maps Tell Us?';
	}
	else if (unitNoLesNo == 0104) {
		title1text = 'Citizenship Lesson Four—';
		title2text = 'How Are Citizenship and Ecology Connected?';
	}
	else if (unitNoLesNo == 0105) {
		title1text = 'Citizenship Lesson Five—';
		title2text = 'What Is a U.S. Citizen?';
	}
	else if (unitNoLesNo == 0106) {
		title1text = 'Citizenship Lesson Six—';
		title2text = 'What Is Effective Citizenship?';
	}
	else if (unitNoLesNo == 0107) {
		title1text = 'Citizenship Lesson Seven—';
		title2text = 'Who Shows Great Citizenship? (Advanced)';
	}
	else if (unitNoLesNo == 0108) {
		title1text = 'Citizenship Lesson Eight—';
		title2text = 'Review';
	}
	else if (unitNoLesNo == 0109) {
		title1text = 'Citizenship Lesson Nine—';
		title2text = 'Unit Exam';
	}	
	else if (unitNoLesNo == 0200) {
		title1text = 'Foundations—';
		title2text = 'Introduction';
	}
	else if (unitNoLesNo == 0201) {
		title1text = 'Foundations Lesson One—';
		title2text = 'Who Influenced the Founding Fathers?';
	}
	else if (unitNoLesNo == 0202) {
		title1text = 'Foundations Lesson Two—';
		title2text = 'Which Important Documents Influenced America?';
	}
	else if (unitNoLesNo == 0203) {
		title1text = 'Foundations Lesson Three—';
		title2text = 'Why Is the Declaration of Independence Important?';
	}
	else if (unitNoLesNo == 0204) {
		title1text = 'Foundations Lesson Four—';
		title2text = 'What Is the Intent of the Constitution?';
	}
	else if (unitNoLesNo == 0205) {
		title1text = 'Foundations Lesson Five—';
		title2text = 'How Do the Branches of Government Work?';
	}
	else if (unitNoLesNo == 0206) {
		title1text = 'Foundations Lesson Six—';
		title2text = 'How Are the Powers Balanced?';
	}
	else if (unitNoLesNo == 0207) {
		title1text = 'Foundations Lesson Seven—';
		title2text = 'How Are Rights Protected?';
	}
	else if (unitNoLesNo == 0208) {
		title1text = 'Foundations Lesson Eight—';
		title2text = 'How Can the Constitution Change?';
	}
	else if (unitNoLesNo == 0209) {
		title1text = 'Foundations Lesson Nine—';
		title2text = 'What Should Be the Next Amendment? (Advanced)';
	}
	else if (unitNoLesNo == 0210) {
		title1text = 'Foundations Lesson Ten—';
		title2text = 'Review';
	}
	else if (unitNoLesNo == 0211) {
		title1text = 'Foundations Lesson Eleven—';
		title2text = 'Unit Exam';
	}	
	else if (unitNoLesNo == 0300) {
		title1text = 'Sharing Power—';
		title2text = 'Introduction';
	}
	else if (unitNoLesNo == 0301) {
		title1text = 'Sharing Power Lesson One—';
		title2text = 'What Is Federalism?';
	}
	else if (unitNoLesNo == 0302) {
		title1text = 'Sharing Power Lesson Two—';
		title2text = 'How Are States Governed?';
	}
	else if (unitNoLesNo == 0303) {
		title1text = 'Sharing Power Lesson Three—';
		title2text = 'What Is Rule of Law?';
	}
	else if (unitNoLesNo == 0304) {
		title1text = 'Sharing Power Lesson Four—';
		title2text = 'How Are Laws Made?';
	}
	else if (unitNoLesNo == 0305) {
		title1text = 'Sharing Power Lesson Five—';
		title2text = 'Does Lawmaking Shape Society? (Advanced)';
	}
	else if (unitNoLesNo == 0306) {
		title1text = 'Sharing Power Lesson Six—';
		title2text = 'How Do the Courts Work?';
	}
	else if (unitNoLesNo == 0307) {
		title1text = 'Sharing Power Lesson Seven—';
		title2text = 'How Does a Jury Trial Ensure Justice?';
	}
	else if (unitNoLesNo == 0308) {
		title1text = 'Sharing Power Lesson Eight—';
		title2text = 'How Can We Solve Local Problems?';
	}
	else if (unitNoLesNo == 0309) {
		title1text = 'Sharing Power Lesson Nine—';
		title2text = 'Review';
	}
	else if (unitNoLesNo == 0310) {
		title1text = 'Sharing Power Lesson Ten—';
		title2text = 'Unit Exam';
	}	
	else if (unitNoLesNo == 0400) {
		title1text = 'Active Citizens—';
		title2text = 'Introduction';
	}
	else if (unitNoLesNo == 0401) {
		title1text = 'Active Citizens Lesson One—';
		title2text = 'How Do Citizen Perspectives Differ?';
	}
	else if (unitNoLesNo == 0402) {
		title1text = 'Active Citizens Lesson Two—';
		title2text = 'What Is Judicial Review?';
	}
	else if (unitNoLesNo == 0403) {
		title1text = 'Active Citizens Lesson Three—';
		title2text = 'How Can Art Inspire Action? (Advanced)';
	}
	else if (unitNoLesNo == 0404) {
		title1text = 'Active Citizens Lesson Four—';
		title2text = 'What Are the Rights of the Accused?';
	}
	else if (unitNoLesNo == 0405) {
		title1text = 'Active Citizens Lesson Five—';
		title2text = 'What Are the Rights of Speech?';
	}
	else if (unitNoLesNo == 0406) {
		title1text = 'Active Citizens Lesson Six—';
		title2text = 'How Can We Influence Government? ';
	}
	else if (unitNoLesNo == 0407) {
		title1text = 'Active Citizens Lesson Seven—';
		title2text = 'How Do Elections Impact Society?';
	}
	else if (unitNoLesNo == 0408) {
		title1text = 'Active Citizens Lesson Eight—';
		title2text = 'What Are Demographics?';
	}
	else if (unitNoLesNo == 0409) {
		title1text = 'Active Citizens Lesson Nine—';
		title2text = 'Review';
	}
	else if (unitNoLesNo == 0410) {
		title1text = 'Active Citizens Lesson Ten—';
		title2text = 'Unit Exam';
	}			
	else if (unitNoLesNo == 0500) {
		title1text = 'American Money—';
		title2text = 'Introduction';
	}	
	else if (unitNoLesNo == 0501) {
		title1text = 'American Money Lesson One—';
		title2text = 'How Does Scarcity Affect Us?';
	}
	else if (unitNoLesNo == 0502) {
		title1text = 'American Money Lesson Two—';
		title2text = 'What Are Incentives?';
	}
	else if (unitNoLesNo == 0503) {
		title1text = 'American Money Lesson Three—';
		title2text = 'What Is the Role of Competition?';
	}
	else if (unitNoLesNo == 0504) {
		title1text = 'American Money Lesson Four—';
		title2text = 'How Does Banking Work?';
	}
	else if (unitNoLesNo == 0505) {
		title1text = 'American Money Lesson Five—';
		title2text = 'Why Should We Pay Taxes?';
	}
	else if (unitNoLesNo == 0506) {
		title1text = 'American Money Lesson Six—';
		title2text = 'What Are the Priorities? (Advanced)';
	}
	else if (unitNoLesNo == 0507) {
		title1text = 'American Money Lesson Seven—';
		title2text = 'How Does Borrowing Money Affect Us?';
	}
	else if (unitNoLesNo == 0508) {
		title1text = 'American Money Lesson Eight—';
		title2text = 'Review';
	}
	else if (unitNoLesNo == 0509) {
		title1text = 'American Money Lesson Nine—';
		title2text = 'Unit Exam';
	}
	else if (unitNoLesNo == 0600) {
		title1text = 'Going Global—';
		title2text = 'Introduction';
	}
	else if (unitNoLesNo == 0601) {
		title1text = 'Going Global Lesson One—';
		title2text = 'How Do Other Nations Govern?';
	}
	else if (unitNoLesNo == 0602) {
		title1text = 'Going Global Lesson Two—';
		title2text = 'How Does Geography Affect Society?';
	}
	else if (unitNoLesNo == 0603) {
		title1text = 'Going Global Lesson Three—';
		title2text = 'Why Should Nations Diversify?';
	}
	else if (unitNoLesNo == 0604) {
		title1text = 'Going Global Lesson Four—';
		title2text = 'What&#39;s New in the World? (Advanced)';
	}
	else if (unitNoLesNo == 0605) {
		title1text = 'Going Global Lesson Five—';
		title2text = 'What Are National Policies?';
	}
	else if (unitNoLesNo == 0606) {
		title1text = 'Going Global Lesson Six—';
		title2text = 'How Does Currency Affect Trade?';
	}
	else if (unitNoLesNo == 0607) {
		title1text = 'Going Global Lesson Seven—';
		title2text = 'How Do We Participate in a World Community?';
	}
	else if (unitNoLesNo == 0608) {
		title1text = 'Going Global Lesson Eight—';
		title2text = 'Review';
	}
	else if (unitNoLesNo == 0609) {
		title1text = 'Going Global Lesson Nine—';
		title2text = 'Unit Exam';
	}	
	else if (unitNoLesNo == 0700) {
		title1text = 'Service Learning';
		title2text = '';
	}																																																											
	
	$(document).ready(function() {

	$("span#title1").empty().append(title1text);
	$("span#title2").empty().append(title2text);
	$("span#title1assign").empty().append(title1text);
	$("span#title2assign").empty().append(title2text);	

	
	});
}


function getUnitTitles() {
	if (unitNo == 0) {
		unitDropdown = '<li><a href="../../gettingstarted/00_00/00_00_01.htm" title="Getting Started"><span>Getting Started</span></a></li><li><a href="../../servicelearning/07_00/07_00_01.htm" title="Service Learning"><span>Service Learning</span></a></li><li><br />&nbsp;&nbsp;Segment 1<br /><a href="../../citizenship/01_00/01_00_01.htm" title="Citizenship"><span>Citizenship</span></a></li><li><a href="../../foundations/02_00/02_00_01.htm" title="Foundations"><span>Foundations</span></a></li><li><a href="../../sharingpower/03_00/03_00_01.htm" title="Sharing Power"><span>Sharing Power</span></a></li><li><br />&nbsp;&nbsp;Segment 2<br /><a href="../../activecitizens/04_00/04_00_01.htm" title="Active Citizens"><span>Active Citizens</span></a></li><li><a href="../../americanmoney/05_00/05_00_01.htm" title="American Money"><span>American Money</span></a></li><li><a href="../../goingglobal/06_00/06_00_01.htm" title="Going Global"><span>Going Global</span></a></li>';
	}		
	if (unitNo == 1) {
		unitDropdown = '<li><a href="../../gettingstarted/00_00/00_00_01.htm" title="Getting Started"><span>Getting Started</span></a></li><li><a href="../../servicelearning/07_00/07_00_01.htm" title="Service Learning"><span>Service Learning</span></a></li><li><br />&nbsp;&nbsp;Segment 1<br /><a href="../../citizenship/01_00/01_00_01.htm" title="Citizenship"><span>Citizenship</span></a></li><li><a href="../../foundations/02_00/02_00_01.htm" title="Foundations"><span>Foundations</span></a></li><li><a href="../../sharingpower/03_00/03_00_01.htm" title="Sharing Power"><span>Sharing Power</span></a></li><li><br />&nbsp;&nbsp;Segment 2<br /><a href="../../activecitizens/04_00/04_00_01.htm" title="Active Citizens"><span>Active Citizens</span></a></li><li><a href="../../americanmoney/05_00/05_00_01.htm" title="American Money"><span>American Money</span></a></li><li><a href="../../goingglobal/06_00/06_00_01.htm" title="Going Global"><span>Going Global</span></a></li>';
	}
	if (unitNo == 2) {
		unitDropdown = '<li><a href="../../gettingstarted/00_00/00_00_01.htm" title="Getting Started"><span>Getting Started</span></a></li><li><a href="../../servicelearning/07_00/07_00_01.htm" title="Service Learning"><span>Service Learning</span></a></li><li><br />&nbsp;&nbsp;Segment 1<br /><a href="../../citizenship/01_00/01_00_01.htm" title="Citizenship"><span>Citizenship</span></a></li><li><a href="../../foundations/02_00/02_00_01.htm" title="Foundations"><span>Foundations</span></a></li><li><a href="../../sharingpower/03_00/03_00_01.htm" title="Sharing Power"><span>Sharing Power</span></a></li><li><br />&nbsp;&nbsp;Segment 2<br /><a href="../../activecitizens/04_00/04_00_01.htm" title="Active Citizens"><span>Active Citizens</span></a></li><li><a href="../../americanmoney/05_00/05_00_01.htm" title="American Money"><span>American Money</span></a></li><li><a href="../../goingglobal/06_00/06_00_01.htm" title="Going Global"><span>Going Global</span></a></li>';
	}	
	if (unitNo == 3) {
		unitDropdown = '<li><a href="../../gettingstarted/00_00/00_00_01.htm" title="Getting Started"><span>Getting Started</span></a></li><li><a href="../../servicelearning/07_00/07_00_01.htm" title="Service Learning"><span>Service Learning</span></a></li><li><br />&nbsp;&nbsp;Segment 1<br /><a href="../../citizenship/01_00/01_00_01.htm" title="Citizenship"><span>Citizenship</span></a></li><li><a href="../../foundations/02_00/02_00_01.htm" title="Foundations"><span>Foundations</span></a></li><li><a href="../../sharingpower/03_00/03_00_01.htm" title="Sharing Power"><span>Sharing Power</span></a></li><li><br />&nbsp;&nbsp;Segment 2<br /><a href="../../activecitizens/04_00/04_00_01.htm" title="Active Citizens"><span>Active Citizens</span></a></li><li><a href="../../americanmoney/05_00/05_00_01.htm" title="American Money"><span>American Money</span></a></li><li><a href="../../goingglobal/06_00/06_00_01.htm" title="Going Global"><span>Going Global</span></a></li>';
	}	
	if (unitNo == 4) {
		unitDropdown = '<li><a href="../../gettingstarted/00_00/00_00_01.htm" title="Getting Started"><span>Getting Started</span></a></li><li><a href="../../servicelearning/07_00/07_00_01.htm" title="Service Learning"><span>Service Learning</span></a></li><li><br />&nbsp;&nbsp;Segment 1<br /><a href="../../citizenship/01_00/01_00_01.htm" title="Citizenship"><span>Citizenship</span></a></li><li><a href="../../foundations/02_00/02_00_01.htm" title="Foundations"><span>Foundations</span></a></li><li><a href="../../sharingpower/03_00/03_00_01.htm" title="Sharing Power"><span>Sharing Power</span></a></li><li><br />&nbsp;&nbsp;Segment 2<br /><a href="../../activecitizens/04_00/04_00_01.htm" title="Active Citizens"><span>Active Citizens</span></a></li><li><a href="../../americanmoney/05_00/05_00_01.htm" title="American Money"><span>American Money</span></a></li><li><a href="../../goingglobal/06_00/06_00_01.htm" title="Going Global"><span>Going Global</span></a></li>';
	}
	if (unitNo == 5) {
		unitDropdown = '<li><a href="../../gettingstarted/00_00/00_00_01.htm" title="Getting Started"><span>Getting Started</span></a></li><li><a href="../../servicelearning/07_00/07_00_01.htm" title="Service Learning"><span>Service Learning</span></a></li><li><br />&nbsp;&nbsp;Segment 1<br /><a href="../../citizenship/01_00/01_00_01.htm" title="Citizenship"><span>Citizenship</span></a></li><li><a href="../../foundations/02_00/02_00_01.htm" title="Foundations"><span>Foundations</span></a></li><li><a href="../../sharingpower/03_00/03_00_01.htm" title="Sharing Power"><span>Sharing Power</span></a></li><li><br />&nbsp;&nbsp;Segment 2<br /><a href="../../activecitizens/04_00/04_00_01.htm" title="Active Citizens"><span>Active Citizens</span></a></li><li><a href="../../americanmoney/05_00/05_00_01.htm" title="American Money"><span>American Money</span></a></li><li><a href="../../goingglobal/06_00/06_00_01.htm" title="Going Global"><span>Going Global</span></a></li>';
	}
	if (unitNo == 6) {
		unitDropdown = '<li><a href="../../gettingstarted/00_00/00_00_01.htm" title="Getting Started"><span>Getting Started</span></a></li><li><a href="../../servicelearning/07_00/07_00_01.htm" title="Service Learning"><span>Service Learning</span></a></li><li><br />&nbsp;&nbsp;Segment 1<br /><a href="../../citizenship/01_00/01_00_01.htm" title="Citizenship"><span>Citizenship</span></a></li><li><a href="../../foundations/02_00/02_00_01.htm" title="Foundations"><span>Foundations</span></a></li><li><a href="../../sharingpower/03_00/03_00_01.htm" title="Sharing Power"><span>Sharing Power</span></a></li><li><br />&nbsp;&nbsp;Segment 2<br /><a href="../../activecitizens/04_00/04_00_01.htm" title="Active Citizens"><span>Active Citizens</span></a></li><li><a href="../../americanmoney/05_00/05_00_01.htm" title="American Money"><span>American Money</span></a></li><li><a href="../../goingglobal/06_00/06_00_01.htm" title="Going Global"><span>Going Global</span></a></li>';					
	}
	if (unitNo == 7) {
		unitDropdown = '<li><a href="../../gettingstarted/00_00/00_00_01.htm" title="Getting Started"><span>Getting Started</span></a></li><li><a href="../../servicelearning/07_00/07_00_01.htm" title="Service Learning"><span>Service Learning</span></a></li><li><br />&nbsp;&nbsp;Segment 1<br /><a href="../../citizenship/01_00/01_00_01.htm" title="Citizenship"><span>Citizenship</span></a></li><li><a href="../../foundations/02_00/02_00_01.htm" title="Foundations"><span>Foundations</span></a></li><li><a href="../../sharingpower/03_00/03_00_01.htm" title="Sharing Power"><span>Sharing Power</span></a></li><li><br />&nbsp;&nbsp;Segment 2<br /><a href="../../activecitizens/04_00/04_00_01.htm" title="Active Citizens"><span>Active Citizens</span></a></li><li><a href="../../americanmoney/05_00/05_00_01.htm" title="American Money"><span>American Money</span></a></li><li><a href="../../goingglobal/06_00/06_00_01.htm" title="Going Global"><span>Going Global</span></a></li>';
	}			
	$(document).ready(function() {

	$("dl#units dd ul").empty().append(unitDropdown);
	
	});
}



function getPages() {

	if (unitNoLesNo == 0000) {
		pageDropdown = '<li><a href="../../gettingstarted/00_00/00_00_01.htm" title="Page One">Page One</a></li><li><a href="../../gettingstarted/00_00/00_00_02.htm" title="Page Two">Page Two</a></li><li><a href="../../gettingstarted/00_00/00_00_03.htm" title="Page Three">Page Three</a></li><li><a href="../../gettingstarted/00_00/00_00_04.htm" title="Page Four">Page Four</a></li><li><a href="../../gettingstarted/00_00/00_00_05.htm" title="Page Five">Page Five</a></li>';
	}		
	else if (unitNoLesNo == 0100) {
	pageDropdown = '<li><a href="../../citizenship/01_00/01_00_01.htm" title="Page One">Page One</a></li><li><a href="../../citizenship/01_00/01_00_02.htm" title="Page Two">Page Two</a></li><li><a href="../../citizenship/01_00/01_00_03.htm" title="Page Three">Page Three</a></li><li><a href="../../citizenship/01_00/01_00_04.htm" title="Page Four">Page Four</a></li>';
	}
	else if (unitNoLesNo == 0101) {
		pageDropdown = '<li><a href="../../citizenship/01_01/01_01_01.htm" title="Page One">Page One</a></li><li><a href="../../citizenship/01_01/01_01_02.htm" title="Page Two">Page Two</a></li><li><a href="../../citizenship/01_01/01_01_03.htm" title="Page Three">Page Three</a></li><li><a href="../../citizenship/01_01/01_01_04.htm" title="Page Four">Page Four</a></li><li><a href="../../citizenship/01_01/01_01_05.htm" title="Page Five">Page Five</a></li><li><a href="../../citizenship/01_01/01_01_06.htm" title="Page Six">Page Six</a></li><li><a href="../../citizenship/01_01/01_01_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../citizenship/01_01/01_01_08.htm" title="Page Eight">Page Eight</a></li>';
	}	
	else if (unitNoLesNo == 0102) {
		pageDropdown = '<li><a href="../../citizenship/01_02/01_02_01.htm" title="Page One">Page One</a></li><li><a href="../../citizenship/01_02/01_02_02.htm" title="Page Two">Page Two</a></li><li><a href="../../citizenship/01_02/01_02_03.htm" title="Page Three">Page Three</a></li><li><a href="../../citizenship/01_02/01_02_04.htm" title="Page Four">Page Four</a></li><li><a href="../../citizenship/01_02/01_02_05.htm" title="Page Five">Page Five</a></li><li><a href="../../citizenship/01_02/01_02_06.htm" title="Page Six">Page Six</a></li><li><a href="../../citizenship/01_02/01_02_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../citizenship/01_02/01_02_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../citizenship/01_02/01_02_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../citizenship/01_02/01_02_10.htm" title="Page Ten">Page Ten</a></li>';
	}
	else if (unitNoLesNo == 0103) {
		pageDropdown = '<li><a href="../../citizenship/01_03/01_03_01.htm" title="Page One">Page One</a></li><li><a href="../../citizenship/01_03/01_03_02.htm" title="Page Two">Page Two</a></li><li><a href="../../citizenship/01_03/01_03_03.htm" title="Page Three">Page Three</a></li><li><a href="../../citizenship/01_03/01_03_04.htm" title="Page Four">Page Four</a></li><li><a href="../../citizenship/01_03/01_03_05.htm" title="Page Five">Page Five</a></li><li><a href="../../citizenship/01_03/01_03_06.htm" title="Page Six">Page Six</a></li><li><a href="../../citizenship/01_03/01_03_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../citizenship/01_03/01_03_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../citizenship/01_03/01_03_09.htm" title="Page Nine">Page Nine</a></li>';
	}	
	else if (unitNoLesNo == 0104) {
		pageDropdown = '<li><a href="../../citizenship/01_04/01_04_01.htm" title="Page One">Page One</a></li><li><a href="../../citizenship/01_04/01_04_02.htm" title="Page Two">Page Two</a></li><li><a href="../../citizenship/01_04/01_04_03.htm" title="Page Three">Page Three</a></li><li><a href="../../citizenship/01_04/01_04_04.htm" title="Page Four">Page Four</a></li><li><a href="../../citizenship/01_04/01_04_05.htm" title="Page Five">Page Five</a></li><li><a href="../../citizenship/01_04/01_04_06.htm" title="Page Six">Page Six</a></li><li><a href="../../citizenship/01_04/01_04_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../citizenship/01_04/01_04_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../citizenship/01_04/01_04_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../citizenship/01_04/01_04_10.htm" title="Page Ten">Page Ten</a></li>';
	}	
	else if (unitNoLesNo == 0105) {
		pageDropdown = '<li><a href="../../citizenship/01_05/01_05_01.htm" title="Page One">Page One</a></li><li><a href="../../citizenship/01_05/01_05_02.htm" title="Page Two">Page Two</a></li><li><a href="../../citizenship/01_05/01_05_03.htm" title="Page Three">Page Three</a></li><li><a href="../../citizenship/01_05/01_05_04.htm" title="Page Four">Page Four</a></li><li><a href="../../citizenship/01_05/01_05_05.htm" title="Page Five">Page Five</a></li><li><a href="../../citizenship/01_05/01_05_06.htm" title="Page Six">Page Six</a></li><li><a href="../../citizenship/01_05/01_05_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../citizenship/01_05/01_05_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../citizenship/01_05/01_05_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../citizenship/01_05/01_05_10.htm" title="Page Ten">Page Ten</a></li><li><a href="../../citizenship/01_05/01_05_11.htm" title="Page Eleven">Page Eleven</a></li>';
	}		
	else if (unitNoLesNo == 0106) {
		pageDropdown = '<li><a href="../../citizenship/01_06/01_06_01.htm" title="Page One">Page One</a></li><li><a href="../../citizenship/01_06/01_06_02.htm" title="Page Two">Page Two</a></li><li><a href="../../citizenship/01_06/01_06_03.htm" title="Page Three">Page Three</a></li><li><a href="../../citizenship/01_06/01_06_04.htm" title="Page Four">Page Four</a></li><li><a href="../../citizenship/01_06/01_06_05.htm" title="Page Five">Page Five</a></li><li><a href="../../citizenship/01_06/01_06_06.htm" title="Page Six">Page Six</a></li><li><a href="../../citizenship/01_06/01_06_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../citizenship/01_06/01_06_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../citizenship/01_06/01_06_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../citizenship/01_06/01_06_10.htm" title="Page Ten">Page Ten</a></li>';
	}		
	else if (unitNoLesNo == 0107) {
		pageDropdown = '<li><a href="../../citizenship/01_07/01_07_01.htm" title="Page One">Page One</a></li><li><a href="../../citizenship/01_07/01_07_02.htm" title="Page Two">Page Two</a></li><li><a href="../../citizenship/01_07/01_07_03.htm" title="Page Three">Page Three</a></li><li><a href="../../citizenship/01_07/01_07_04.htm" title="Page Four">Page Four</a></li><li><a href="../../citizenship/01_07/01_07_05.htm" title="Page Five">Page Five</a></li><li><a href="../../citizenship/01_07/01_07_06.htm" title="Page Six">Page Six</a></li><li><a href="../../citizenship/01_07/01_07_07.htm" title="Page Seven">Page Seven</a></li>';
	}		
	else if (unitNoLesNo == 0108) {
		pageDropdown = '<li><a href="../../citizenship/01_08/01_08_01.htm" title="Page One">Page One</a></li><li><a href="../../citizenship/01_08/01_08_02.htm" title="Page Two">Page Two</a></li><li><a href="../../citizenship/01_08/01_08_03.htm" title="Page Three">Page Three</a></li><li><a href="../../citizenship/01_08/01_08_04.htm" title="Page Four">Page Four</a></li><li><a href="../../citizenship/01_08/01_08_05.htm" title="Page Five">Page Five</a></li><li><a href="../../citizenship/01_08/01_08_06.htm" title="Page Six">Page Six</a></li>';
	}	
	else if (unitNoLesNo == 0109) {
		pageDropdown = '<li><a href="../../citizenship/01_09/01_09_01.htm" title="Page One">Page One</a></li>';
	}			
	else if (unitNoLesNo == 0200) {
		pageDropdown = '<li><a href="../../foundations/02_00/02_00_01.htm" title="Page One">Page One</a></li><li><a href="../../foundations/02_00/02_00_02.htm" title="Page Two">Page Two</a></li><li><a href="../../foundations/02_00/02_00_03.htm" title="Page Three">Page Three</a></li><li><a href="../../foundations/02_00/02_00_04.htm" title="Page Four">Page Four</a></li>';
	}		
	else if (unitNoLesNo == 0201) {
		pageDropdown = '<li><a href="../../foundations/02_01/02_01_01.htm" title="Page One">Page One</a></li><li><a href="../../foundations/02_01/02_01_02.htm" title="Page Two">Page Two</a></li><li><a href="../../foundations/02_01/02_01_03.htm" title="Page Three">Page Three</a></li><li><a href="../../foundations/02_01/02_01_04.htm" title="Page Four">Page Four</a></li><li><a href="../../foundations/02_01/02_01_05.htm" title="Page Five">Page Five</a></li><li><a href="../../foundations/02_01/02_01_06.htm" title="Page Six">Page Six</a></li><li><a href="../../foundations/02_01/02_01_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../foundations/02_01/02_01_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../foundations/02_01/02_01_09.htm" title="Page Nine">Page Nine</a></li>';
	}
	else if (unitNoLesNo == 0202) {
		pageDropdown = '<li><a href="../../foundations/02_02/02_02_01.htm" title="Page One">Page One</a></li><li><a href="../../foundations/02_02/02_02_02.htm" title="Page Two">Page Two</a></li><li><a href="../../foundations/02_02/02_02_03.htm" title="Page Three">Page Three</a></li><li><a href="../../foundations/02_02/02_02_04.htm" title="Page Four">Page Four</a></li><li><a href="../../foundations/02_02/02_02_05.htm" title="Page Five">Page Five</a></li><li><a href="../../foundations/02_02/02_02_06.htm" title="Page Six">Page Six</a></li>';
	}	
	else if (unitNoLesNo == 0203) {
		pageDropdown = '<li><a href="../../foundations/02_03/02_03_01.htm" title="Page One">Page One</a></li><li><a href="../../foundations/02_03/02_03_02.htm" title="Page Two">Page Two</a></li><li><a href="../../foundations/02_03/02_03_03.htm" title="Page Three">Page Three</a></li><li><a href="../../foundations/02_03/02_03_04.htm" title="Page Four">Page Four</a></li><li><a href="../../foundations/02_03/02_03_05.htm" title="Page Five">Page Five</a></li><li><a href="../../foundations/02_03/02_03_06.htm" title="Page Six">Page Six</a></li><li><a href="../../foundations/02_03/02_03_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../foundations/02_03/02_03_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../foundations/02_03/02_03_09.htm" title="Page Nine">Page Nine</a></li>';
	}	
	else if (unitNoLesNo == 0204) {
		pageDropdown = '<li><a href="../../foundations/02_04/02_04_01.htm" title="Page One">Page One</a></li><li><a href="../../foundations/02_04/02_04_02.htm" title="Page Two">Page Two</a></li><li><a href="../../foundations/02_04/02_04_03.htm" title="Page Three">Page Three</a></li><li><a href="../../foundations/02_04/02_04_04.htm" title="Page Four">Page Four</a></li><li><a href="../../foundations/02_04/02_04_05.htm" title="Page Five">Page Five</a></li><li><a href="../../foundations/02_04/02_04_06.htm" title="Page Six">Page Six</a></li><li><a href="../../foundations/02_04/02_04_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../foundations/02_04/02_04_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../foundations/02_04/02_04_09.htm" title="Page Nine">Page Nine</a></li>';
	}	
	else if (unitNoLesNo == 0205) {
		pageDropdown = '<li><a href="../../foundations/02_05/02_05_01.htm" title="Page One">Page One</a></li><li><a href="../../foundations/02_05/02_05_02.htm" title="Page Two">Page Two</a></li><li><a href="../../foundations/02_05/02_05_03.htm" title="Page Three">Page Three</a></li><li><a href="../../foundations/02_05/02_05_04.htm" title="Page Four">Page Four</a></li><li><a href="../../foundations/02_05/02_05_05.htm" title="Page Five">Page Five</a></li><li><a href="../../foundations/02_05/02_05_06.htm" title="Page Six">Page Six</a></li><li><a href="../../foundations/02_05/02_05_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../foundations/02_05/02_05_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../foundations/02_05/02_05_09.htm" title="Page Nine">Page Nine</a></li>';
	}	
	else if (unitNoLesNo == 0206) {
		pageDropdown = '<li><a href="../../foundations/02_06/02_06_01.htm" title="Page One">Page One</a></li><li><a href="../../foundations/02_06/02_06_02.htm" title="Page Two">Page Two</a></li><li><a href="../../foundations/02_06/02_06_03.htm" title="Page Three">Page Three</a></li><li><a href="../../foundations/02_06/02_06_04.htm" title="Page Four">Page Four</a></li><li><a href="../../foundations/02_06/02_06_05.htm" title="Page Five">Page Five</a></li><li><a href="../../foundations/02_06/02_06_06.htm" title="Page Six">Page Six</a></li><li><a href="../../foundations/02_06/02_06_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../foundations/02_06/02_06_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../foundations/02_06/02_06_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../foundations/02_06/02_06_10.htm" title="Page Ten">Page Ten</a></li>';
	}	
	else if (unitNoLesNo == 0207) {
		pageDropdown = '<li><a href="../../foundations/02_07/02_07_01.htm" title="Page One">Page One</a></li><li><a href="../../foundations/02_07/02_07_02.htm" title="Page Two">Page Two</a></li><li><a href="../../foundations/02_07/02_07_03.htm" title="Page Three">Page Three</a></li><li><a href="../../foundations/02_07/02_07_04.htm" title="Page Four">Page Four</a></li><li><a href="../../foundations/02_07/02_07_05.htm" title="Page Five">Page Five</a></li><li><a href="../../foundations/02_07/02_07_06.htm" title="Page Six">Page Six</a></li><li><a href="../../foundations/02_07/02_07_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../foundations/02_07/02_07_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../foundations/02_07/02_07_09.htm" title="Page Nine">Page Nine</a></li>';
	}	
	else if (unitNoLesNo == 0208) {
		pageDropdown = '<li><a href="../../foundations/02_08/02_08_01.htm" title="Page One">Page One</a></li><li><a href="../../foundations/02_08/02_08_02.htm" title="Page Two">Page Two</a></li><li><a href="../../foundations/02_08/02_08_03.htm" title="Page Three">Page Three</a></li><li><a href="../../foundations/02_08/02_08_04.htm" title="Page Four">Page Four</a></li><li><a href="../../foundations/02_08/02_08_05.htm" title="Page Five">Page Five</a></li><li><a href="../../foundations/02_08/02_08_06.htm" title="Page Six">Page Six</a></li><li><a href="../../foundations/02_08/02_08_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../foundations/02_08/02_08_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../foundations/02_08/02_08_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../foundations/02_08/02_08_10.htm" title="Page Ten">Page Ten</a></li><li><a href="../../foundations/02_08/02_08_11.htm" title="Page Eleven">Page Eleven</a></li>';
	}	
	else if (unitNoLesNo == 0209) {
		pageDropdown = '<li><a href="../../foundations/02_09/02_09_01.htm" title="Page One">Page One</a></li><li><a href="../../foundations/02_09/02_09_02.htm" title="Page Two">Page Two</a></li><li><a href="../../foundations/02_09/02_09_03.htm" title="Page Three">Page Three</a></li><li><a href="../../foundations/02_09/02_09_04.htm" title="Page Four">Page Four</a></li><li><a href="../../foundations/02_09/02_09_05.htm" title="Page Five">Page Five</a></li><li><a href="../../foundations/02_09/02_09_06.htm" title="Page Six">Page Six</a></li><li><a href="../../foundations/02_09/02_09_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../foundations/02_09/02_09_08.htm" title="Page Eight">Page Eight</a></li>';
	}	
	else if (unitNoLesNo == 0210) {
		pageDropdown = '<li><a href="../../foundations/02_10/02_10_01.htm" title="Page One">Page One</a></li><li><a href="../../foundations/02_10/02_10_02.htm" title="Page Two">Page Two</a></li><li><a href="../../foundations/02_10/02_10_03.htm" title="Page Three">Page Three</a></li><li><a href="../../foundations/02_10/02_10_04.htm" title="Page Four">Page Four</a></li><li><a href="../../foundations/02_10/02_10_05.htm" title="Page Five">Page Five</a></li><li><a href="../../foundations/02_10/02_10_06.htm" title="Page Six">Page Six</a></li>';
	}	
	else if (unitNoLesNo == 0211) {
		pageDropdown = '<li><a href="../../foundations/02_11/02_11_01.htm" title="Page One">Page One</a></li>';
	}		
	else if (unitNoLesNo == 0300) {
		pageDropdown = '<li><a href="../../sharingpower/03_00/03_00_01.htm" title="Page One">Page One</a></li><li><a href="../../sharingpower/03_00/03_00_02.htm" title="Page Two">Page Two</a></li><li><a href="../../sharingpower/03_00/03_00_03.htm" title="Page Three">Page Three</a></li><li><a href="../../sharingpower/03_00/03_00_04.htm" title="Page Four">Page Four</a></li>';
	}	
	else if (unitNoLesNo == 0301) {
		pageDropdown = '<li><a href="../../sharingpower/03_01/03_01_01.htm" title="Page One">Page One</a></li><li><a href="../../sharingpower/03_01/03_01_02.htm" title="Page Two">Page Two</a></li><li><a href="../../sharingpower/03_01/03_01_03.htm" title="Page Three">Page Three</a></li><li><a href="../../sharingpower/03_01/03_01_04.htm" title="Page Four">Page Four</a></li><li><a href="../../sharingpower/03_01/03_01_05.htm" title="Page Five">Page Five</a></li><li><a href="../../sharingpower/03_01/03_01_06.htm" title="Page Six">Page Six</a></li><li><a href="../../sharingpower/03_01/03_01_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../sharingpower/03_01/03_01_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../sharingpower/03_01/03_01_09.htm" title="Page Nine">Page Nine</a></li>';
	}	
	else if (unitNoLesNo == 0302) {
		pageDropdown = '<li><a href="../../sharingpower/03_02/03_02_01.htm" title="Page One">Page One</a></li><li><a href="../../sharingpower/03_02/03_02_02.htm" title="Page Two">Page Two</a></li><li><a href="../../sharingpower/03_02/03_02_03.htm" title="Page Three">Page Three</a></li><li><a href="../../sharingpower/03_02/03_02_04.htm" title="Page Four">Page Four</a></li><li><a href="../../sharingpower/03_02/03_02_05.htm" title="Page Five">Page Five</a></li><li><a href="../../sharingpower/03_02/03_02_06.htm" title="Page Six">Page Six</a></li><li><a href="../../sharingpower/03_02/03_02_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../sharingpower/03_02/03_02_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../sharingpower/03_02/03_02_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../sharingpower/03_02/03_02_10.htm" title="Page Ten">Page Ten</a></li><li><a href="../../sharingpower/03_02/03_02_11.htm" title="Page Eleven">Page Eleven</a></li><li><a href="../../sharingpower/03_02/03_02_12.htm" title="Page Twelve">Page Twelve</a></li>';
	}	
	else if (unitNoLesNo == 0303) {
		pageDropdown = '<li><a href="../../sharingpower/03_03/03_03_01.htm" title="Page One">Page One</a></li><li><a href="../../sharingpower/03_03/03_03_02.htm" title="Page Two">Page Two</a></li><li><a href="../../sharingpower/03_03/03_03_03.htm" title="Page Three">Page Three</a></li><li><a href="../../sharingpower/03_03/03_03_04.htm" title="Page Four">Page Four</a></li><li><a href="../../sharingpower/03_03/03_03_05.htm" title="Page Five">Page Five</a></li><li><a href="../../sharingpower/03_03/03_03_06.htm" title="Page Six">Page Six</a></li><li><a href="../../sharingpower/03_03/03_03_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../sharingpower/03_03/03_03_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../sharingpower/03_03/03_03_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../sharingpower/03_03/03_03_10.htm" title="Page Ten">Page Ten</a></li><li><a href="../../sharingpower/03_03/03_03_11.htm" title="Page Eleven">Page Eleven</a></li>';
	}	
	else if (unitNoLesNo == 0304) {
		pageDropdown = '<li><a href="../../sharingpower/03_04/03_04_01.htm" title="Page One">Page One</a></li><li><a href="../../sharingpower/03_04/03_04_02.htm" title="Page Two">Page Two</a></li><li><a href="../../sharingpower/03_04/03_04_03.htm" title="Page Three">Page Three</a></li><li><a href="../../sharingpower/03_04/03_04_04.htm" title="Page Four">Page Four</a></li><li><a href="../../sharingpower/03_04/03_04_05.htm" title="Page Five">Page Five</a></li><li><a href="../../sharingpower/03_04/03_04_06.htm" title="Page Six">Page Six</a></li><li><a href="../../sharingpower/03_04/03_04_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../sharingpower/03_04/03_04_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../sharingpower/03_04/03_04_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../sharingpower/03_04/03_04_10.htm" title="Page Ten">Page Ten</a></li>';
	}	
	else if (unitNoLesNo == 0305) {
		pageDropdown = '<li><a href="../../sharingpower/03_05/03_05_01.htm" title="Page One">Page One</a></li><li><a href="../../sharingpower/03_05/03_05_02.htm" title="Page Two">Page Two</a></li><li><a href="../../sharingpower/03_05/03_05_03.htm" title="Page Three">Page Three</a></li><li><a href="../../sharingpower/03_05/03_05_04.htm" title="Page Four">Page Four</a></li><li><a href="../../sharingpower/03_05/03_05_05.htm" title="Page Five">Page Five</a></li><li><a href="../../sharingpower/03_05/03_05_06.htm" title="Page Six">Page Six</a></li><li><a href="../../sharingpower/03_05/03_05_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../sharingpower/03_05/03_05_08.htm" title="Page Eight">Page Eight</a></li>';
	}	
	else if (unitNoLesNo == 0306) {
		pageDropdown = '<li><a href="../../sharingpower/03_06/03_06_01.htm" title="Page One">Page One</a></li><li><a href="../../sharingpower/03_06/03_06_02.htm" title="Page Two">Page Two</a></li><li><a href="../../sharingpower/03_06/03_06_03.htm" title="Page Three">Page Three</a></li><li><a href="../../sharingpower/03_06/03_06_04.htm" title="Page Four">Page Four</a></li><li><a href="../../sharingpower/03_06/03_06_05.htm" title="Page Five">Page Five</a></li><li><a href="../../sharingpower/03_06/03_06_06.htm" title="Page Six">Page Six</a></li><li><a href="../../sharingpower/03_06/03_06_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../sharingpower/03_06/03_06_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../sharingpower/03_06/03_06_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../sharingpower/03_06/03_06_10.htm" title="Page Ten">Page Ten</a></li>';
	}	
	else if (unitNoLesNo == 0307) {
		pageDropdown = '<li><a href="../../sharingpower/03_07/03_07_01.htm" title="Page One">Page One</a></li><li><a href="../../sharingpower/03_07/03_07_02.htm" title="Page Two">Page Two</a></li><li><a href="../../sharingpower/03_07/03_07_03.htm" title="Page Three">Page Three</a></li><li><a href="../../sharingpower/03_07/03_07_04.htm" title="Page Four">Page Four</a></li><li><a href="../../sharingpower/03_07/03_07_05.htm" title="Page Five">Page Five</a></li><li><a href="../../sharingpower/03_07/03_07_06.htm" title="Page Six">Page Six</a></li><li><a href="../../sharingpower/03_07/03_07_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../sharingpower/03_07/03_07_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../sharingpower/03_07/03_07_09.htm" title="Page Nine">Page Nine</a></li>';
	}	
	else if (unitNoLesNo == 0308) {
		pageDropdown = '<li><a href="../../sharingpower/03_08/03_08_01.htm" title="Page One">Page One</a></li><li><a href="../../sharingpower/03_08/03_08_02.htm" title="Page Two">Page Two</a></li><li><a href="../../sharingpower/03_08/03_08_03.htm" title="Page Three">Page Three</a></li><li><a href="../../sharingpower/03_08/03_08_04.htm" title="Page Four">Page Four</a></li><li><a href="../../sharingpower/03_08/03_08_05.htm" title="Page Five">Page Five</a></li><li><a href="../../sharingpower/03_08/03_08_06.htm" title="Page Six">Page Six</a></li><li><a href="../../sharingpower/03_08/03_08_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../sharingpower/03_08/03_08_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../sharingpower/03_08/03_08_09.htm" title="Page Nine">Page Nine</a></li>';
	}	
	else if (unitNoLesNo == 0309) {
		pageDropdown = '<li><a href="../../sharingpower/03_09/03_09_01.htm" title="Page One">Page One</a></li><li><a href="../../sharingpower/03_09/03_09_02.htm" title="Page Two">Page Two</a></li><li><a href="../../sharingpower/03_09/03_09_03.htm" title="Page Three">Page Three</a></li><li><a href="../../sharingpower/03_09/03_09_04.htm" title="Page Four">Page Four</a></li><li><a href="../../sharingpower/03_09/03_09_05.htm" title="Page Five">Page Five</a></li><li><a href="../../sharingpower/03_09/03_09_06.htm" title="Page Six">Page Six</a></li>';
	}
	else if (unitNoLesNo == 0310) {
		pageDropdown = '<li><a href="../../sharingpower/03_10/03_10_01.htm" title="Page One">Page One</a></li>';
	}			
	else if (unitNoLesNo == 0400) {
		pageDropdown = '<li><a href="../../activecitizens/04_00/04_00_01.htm" title="Page One">Page One</a></li><li><a href="../../activecitizens/04_00/04_00_02.htm" title="Page Two">Page Two</a></li><li><a href="../../activecitizens/04_00/04_00_03.htm" title="Page Three">Page Three</a></li><li><a href="../../activecitizens/04_00/04_00_04.htm" title="Page Four">Page Four</a></li>';
	}	
	else if (unitNoLesNo == 0401) {
		pageDropdown = '<li><a href="../../activecitizens/04_01/04_01_01.htm" title="Page One">Page One</a></li><li><a href="../../activecitizens/04_01/04_01_02.htm" title="Page Two">Page Two</a></li><li><a href="../../activecitizens/04_01/04_01_03.htm" title="Page Three">Page Three</a></li><li><a href="../../activecitizens/04_01/04_01_04.htm" title="Page Four">Page Four</a></li><li><a href="../../activecitizens/04_01/04_01_05.htm" title="Page Five">Page Five</a></li><li><a href="../../activecitizens/04_01/04_01_06.htm" title="Page Six">Page Six</a></li><li><a href="../../activecitizens/04_01/04_01_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../activecitizens/04_01/04_01_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../activecitizens/04_01/04_01_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../activecitizens/04_01/04_01_10.htm" title="Page Ten">Page Ten</a></li>';
	}	
	else if (unitNoLesNo == 0402) {
		pageDropdown = '<li><a href="../../activecitizens/04_02/04_02_01.htm" title="Page One">Page One</a></li><li><a href="../../activecitizens/04_02/04_02_02.htm" title="Page Two">Page Two</a></li><li><a href="../../activecitizens/04_02/04_02_03.htm" title="Page Three">Page Three</a></li><li><a href="../../activecitizens/04_02/04_02_04.htm" title="Page Four">Page Four</a></li><li><a href="../../activecitizens/04_02/04_02_05.htm" title="Page Five">Page Five</a></li><li><a href="../../activecitizens/04_02/04_02_06.htm" title="Page Six">Page Six</a></li><li><a href="../../activecitizens/04_02/04_02_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../activecitizens/04_02/04_02_08.htm" title="Page Eight">Page Eight</a></li>';
	}	
	else if (unitNoLesNo == 0403) {
		pageDropdown = '<li><a href="../../activecitizens/04_03/04_03_01.htm" title="Page One">Page One</a></li><li><a href="../../activecitizens/04_03/04_03_02.htm" title="Page Two">Page Two</a></li><li><a href="../../activecitizens/04_03/04_03_03.htm" title="Page Three">Page Three</a></li><li><a href="../../activecitizens/04_03/04_03_04.htm" title="Page Four">Page Four</a></li><li><a href="../../activecitizens/04_03/04_03_05.htm" title="Page Five">Page Five</a></li><li><a href="../../activecitizens/04_03/04_03_06.htm" title="Page Six">Page Six</a></li><li><a href="../../activecitizens/04_03/04_03_07.htm" title="Page Seven">Page Seven</a></li>';
	}	
	else if (unitNoLesNo == 0404) {
		pageDropdown = '<li><a href="../../activecitizens/04_04/04_04_01.htm" title="Page One">Page One</a></li><li><a href="../../activecitizens/04_04/04_04_02.htm" title="Page Two">Page Two</a></li><li><a href="../../activecitizens/04_04/04_04_03.htm" title="Page Three">Page Three</a></li><li><a href="../../activecitizens/04_04/04_04_04.htm" title="Page Four">Page Four</a></li><li><a href="../../activecitizens/04_04/04_04_05.htm" title="Page Five">Page Five</a></li><li><a href="../../activecitizens/04_04/04_04_06.htm" title="Page Six">Page Six</a></li><li><a href="../../activecitizens/04_04/04_04_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../activecitizens/04_04/04_04_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../activecitizens/04_04/04_04_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../activecitizens/04_04/04_04_10.htm" title="Page Ten">Page Ten</a></li>';
	}	
	else if (unitNoLesNo == 0405) {
		pageDropdown = '<li><a href="../../activecitizens/04_05/04_05_01.htm" title="Page One">Page One</a></li><li><a href="../../activecitizens/04_05/04_05_02.htm" title="Page Two">Page Two</a></li><li><a href="../../activecitizens/04_05/04_05_03.htm" title="Page Three">Page Three</a></li><li><a href="../../activecitizens/04_05/04_05_04.htm" title="Page Four">Page Four</a></li><li><a href="../../activecitizens/04_05/04_05_05.htm" title="Page Five">Page Five</a></li><li><a href="../../activecitizens/04_05/04_05_06.htm" title="Page Six">Page Six</a></li><li><a href="../../activecitizens/04_05/04_05_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../activecitizens/04_05/04_05_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../activecitizens/04_05/04_05_09.htm" title="Page Nine">Page Nine</a></li>';
	}	
	else if (unitNoLesNo == 0406) {
		pageDropdown = '<li><a href="../../activecitizens/04_06/04_06_01.htm" title="Page One">Page One</a></li><li><a href="../../activecitizens/04_06/04_06_02.htm" title="Page Two">Page Two</a></li><li><a href="../../activecitizens/04_06/04_06_03.htm" title="Page Three">Page Three</a></li><li><a href="../../activecitizens/04_06/04_06_04.htm" title="Page Four">Page Four</a></li><li><a href="../../activecitizens/04_06/04_06_05.htm" title="Page Five">Page Five</a></li><li><a href="../../activecitizens/04_06/04_06_06.htm" title="Page Six">Page Six</a></li><li><a href="../../activecitizens/04_06/04_06_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../activecitizens/04_06/04_06_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../activecitizens/04_06/04_06_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../activecitizens/04_06/04_06_10.htm" title="Page Ten">Page Ten</a></li>';
	}	
	else if (unitNoLesNo == 0407) {
		pageDropdown = '<li><a href="../../activecitizens/04_07/04_07_01.htm" title="Page One">Page One</a></li><li><a href="../../activecitizens/04_07/04_07_02.htm" title="Page Two">Page Two</a></li><li><a href="../../activecitizens/04_07/04_07_03.htm" title="Page Three">Page Three</a></li><li><a href="../../activecitizens/04_07/04_07_04.htm" title="Page Four">Page Four</a></li><li><a href="../../activecitizens/04_07/04_07_05.htm" title="Page Five">Page Five</a></li>';
	}	
	else if (unitNoLesNo == 0408) {
		pageDropdown = '<li><a href="../../activecitizens/04_08/04_08_01.htm" title="Page One">Page One</a></li><li><a href="../../activecitizens/04_08/04_08_02.htm" title="Page Two">Page Two</a></li><li><a href="../../activecitizens/04_08/04_08_03.htm" title="Page Three">Page Three</a></li><li><a href="../../activecitizens/04_08/04_08_04.htm" title="Page Four">Page Four</a></li><li><a href="../../activecitizens/04_08/04_08_05.htm" title="Page Five">Page Five</a></li><li><a href="../../activecitizens/04_08/04_08_06.htm" title="Page Six">Page Six</a></li><li><a href="../../activecitizens/04_08/04_08_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../activecitizens/04_08/04_08_08.htm" title="Page Eight">Page Eight</a></li>';
	}	
	else if (unitNoLesNo == 0409) {
		pageDropdown = '<li><a href="../../activecitizens/04_09/04_09_01.htm" title="Page One">Page One</a></li><li><a href="../../activecitizens/04_09/04_09_02.htm" title="Page Two">Page Two</a></li><li><a href="../../activecitizens/04_09/04_09_03.htm" title="Page Three">Page Three</a></li><li><a href="../../activecitizens/04_09/04_09_04.htm" title="Page Four">Page Four</a></li><li><a href="../../activecitizens/04_09/04_09_05.htm" title="Page Five">Page Five</a></li><li><a href="../../activecitizens/04_09/04_09_06.htm" title="Page Six">Page Six</a></li>';
	}	
	else if (unitNoLesNo == 0410) {
		pageDropdown = '<li><a href="../../activecitizens/04_10/04_10_01.htm" title="Page One">Page One</a></li>';
	}	
	else if (unitNoLesNo == 0500) {
		pageDropdown = '<li><a href="../../americanmoney/05_00/05_00_01.htm" title="Page One">Page One</a></li><li><a href="../../americanmoney/05_00/05_00_02.htm" title="Page Two">Page Two</a></li><li><a href="../../americanmoney/05_00/05_00_03.htm" title="Page Three">Page Three</a></li><li><a href="../../americanmoney/05_00/05_00_04.htm" title="Page Four">Page Four</a></li>';
	}		
	else if (unitNoLesNo == 0501) {
		pageDropdown = '<li><a href="../../americanmoney/05_01/05_01_01.htm" title="Page One">Page One</a></li><li><a href="../../americanmoney/05_01/05_01_02.htm" title="Page Two">Page Two</a></li><li><a href="../../americanmoney/05_01/05_01_03.htm" title="Page Three">Page Three</a></li><li><a href="../../americanmoney/05_01/05_01_04.htm" title="Page Four">Page Four</a></li><li><a href="../../americanmoney/05_01/05_01_05.htm" title="Page Five">Page Five</a></li><li><a href="../../americanmoney/05_01/05_01_06.htm" title="Page Six">Page Six</a></li><li><a href="../../americanmoney/05_01/05_01_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../americanmoney/05_01/05_01_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../americanmoney/05_01/05_01_09.htm" title="Page Nine">Page Nine</a></li>';
	}	
	else if (unitNoLesNo == 0502) {
		pageDropdown = '<li><a href="../../americanmoney/05_02/05_02_01.htm" title="Page One">Page One</a></li><li><a href="../../americanmoney/05_02/05_02_02.htm" title="Page Two">Page Two</a></li><li><a href="../../americanmoney/05_02/05_02_03.htm" title="Page Three">Page Three</a></li><li><a href="../../americanmoney/05_02/05_02_04.htm" title="Page Four">Page Four</a></li><li><a href="../../americanmoney/05_02/05_02_05.htm" title="Page Five">Page Five</a></li><li><a href="../../americanmoney/05_02/05_02_06.htm" title="Page Six">Page Six</a></li><li><a href="../../americanmoney/05_02/05_02_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../americanmoney/05_02/05_02_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../americanmoney/05_02/05_02_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../americanmoney/05_02/05_02_10.htm" title="Page Ten">Page Ten</a></li>';
	}		
	else if (unitNoLesNo == 0503) {
		pageDropdown = '<li><a href="../../americanmoney/05_03/05_03_01.htm" title="Page One">Page One</a></li><li><a href="../../americanmoney/05_03/05_03_02.htm" title="Page Two">Page Two</a></li><li><a href="../../americanmoney/05_03/05_03_03.htm" title="Page Three">Page Three</a></li><li><a href="../../americanmoney/05_03/05_03_04.htm" title="Page Four">Page Four</a></li><li><a href="../../americanmoney/05_03/05_03_05.htm" title="Page Five">Page Five</a></li><li><a href="../../americanmoney/05_03/05_03_06.htm" title="Page Six">Page Six</a></li><li><a href="../../americanmoney/05_03/05_03_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../americanmoney/05_03/05_03_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../americanmoney/05_03/05_03_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../americanmoney/05_03/05_03_10.htm" title="Page Ten">Page Ten</a></li>';
	}			
	else if (unitNoLesNo == 0504) {
		pageDropdown = '<li><a href="../../americanmoney/05_04/05_04_01.htm" title="Page One">Page One</a></li><li><a href="../../americanmoney/05_04/05_04_02.htm" title="Page Two">Page Two</a></li><li><a href="../../americanmoney/05_04/05_04_03.htm" title="Page Three">Page Three</a></li><li><a href="../../americanmoney/05_04/05_04_04.htm" title="Page Four">Page Four</a></li><li><a href="../../americanmoney/05_04/05_04_05.htm" title="Page Five">Page Five</a></li><li><a href="../../americanmoney/05_04/05_04_06.htm" title="Page Six">Page Six</a></li><li><a href="../../americanmoney/05_04/05_04_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../americanmoney/05_04/05_04_08.htm" title="Page Eight">Page Eight</a></li>';
	}		
	else if (unitNoLesNo == 0505) {
		pageDropdown = '<li><a href="../../americanmoney/05_05/05_05_01.htm" title="Page One">Page One</a></li><li><a href="../../americanmoney/05_05/05_05_02.htm" title="Page Two">Page Two</a></li><li><a href="../../americanmoney/05_05/05_05_03.htm" title="Page Three">Page Three</a></li><li><a href="../../americanmoney/05_05/05_05_04.htm" title="Page Four">Page Four</a></li><li><a href="../../americanmoney/05_05/05_05_05.htm" title="Page Five">Page Five</a></li><li><a href="../../americanmoney/05_05/05_05_06.htm" title="Page Six">Page Six</a></li><li><a href="../../americanmoney/05_05/05_05_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../americanmoney/05_05/05_05_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../americanmoney/05_05/05_05_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../americanmoney/05_05/05_05_10.htm" title="Page Ten">Page Ten</a></li>';
	}		
	else if (unitNoLesNo == 0506) {
		pageDropdown = '<li><a href="../../americanmoney/05_06/05_06_01.htm" title="Page One">Page One</a></li><li><a href="../../americanmoney/05_06/05_06_02.htm" title="Page Two">Page Two</a></li><li><a href="../../americanmoney/05_06/05_06_03.htm" title="Page Three">Page Three</a></li><li><a href="../../americanmoney/05_06/05_06_04.htm" title="Page Four">Page Four</a></li><li><a href="../../americanmoney/05_06/05_06_05.htm" title="Page Five">Page Five</a></li><li><a href="../../americanmoney/05_06/05_06_06.htm" title="Page Six">Page Six</a></li><li><a href="../../americanmoney/05_06/05_06_07.htm" title="Page Seven">Page Seven</a></li>';
	}	
	else if (unitNoLesNo == 0507) {
		pageDropdown = '<li><a href="../../americanmoney/05_07/05_07_01.htm" title="Page One">Page One</a></li><li><a href="../../americanmoney/05_07/05_07_02.htm" title="Page Two">Page Two</a></li><li><a href="../../americanmoney/05_07/05_07_03.htm" title="Page Three">Page Three</a></li><li><a href="../../americanmoney/05_07/05_07_04.htm" title="Page Four">Page Four</a></li><li><a href="../../americanmoney/05_07/05_07_05.htm" title="Page Five">Page Five</a></li><li><a href="../../americanmoney/05_07/05_07_06.htm" title="Page Six">Page Six</a></li><li><a href="../../americanmoney/05_07/05_07_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../americanmoney/05_07/05_07_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../americanmoney/05_07/05_07_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../americanmoney/05_07/05_07_10.htm" title="Page Ten">Page Ten</a></li>';
	}			
	else if (unitNoLesNo == 0508) {
		pageDropdown = '<li><a href="../../americanmoney/05_08/05_08_01.htm" title="Page One">Page One</a></li><li><a href="../../americanmoney/05_08/05_08_02.htm" title="Page Two">Page Two</a></li><li><a href="../../americanmoney/05_08/05_08_03.htm" title="Page Three">Page Three</a></li><li><a href="../../americanmoney/05_08/05_08_04.htm" title="Page Four">Page Four</a></li><li><a href="../../americanmoney/05_08/05_08_05.htm" title="Page Five">Page Five</a></li><li><a href="../../americanmoney/05_08/05_08_06.htm" title="Page Six">Page Six</a></li>';
	}	
	else if (unitNoLesNo == 0509) {
		pageDropdown = '<li><a href="../../americanmoney/05_09/05_09_01.htm" title="Page One">Page One</a></li>';
	}			
	else if (unitNoLesNo == 0600) {
		pageDropdown = '<li><a href="../../goingglobal/06_00/06_00_01.htm" title="Page One">Page One</a></li><li><a href="../../goingglobal/06_00/06_00_02.htm" title="Page Two">Page Two</a></li><li><a href="../../goingglobal/06_00/06_00_03.htm" title="Page Three">Page Three</a></li><li><a href="../../goingglobal/06_00/06_00_04.htm" title="Page Four">Page Four</a></li>';
	}		
	else if (unitNoLesNo == 0601) {
		pageDropdown = '<li><a href="../../goingglobal/06_01/06_01_01.htm" title="Page One">Page One</a></li><li><a href="../../goingglobal/06_01/06_01_02.htm" title="Page Two">Page Two</a></li><li><a href="../../goingglobal/06_01/06_01_03.htm" title="Page Three">Page Three</a></li><li><a href="../../goingglobal/06_01/06_01_04.htm" title="Page Four">Page Four</a></li><li><a href="../../goingglobal/06_01/06_01_05.htm" title="Page Five">Page Five</a></li><li><a href="../../goingglobal/06_01/06_01_06.htm" title="Page Six">Page Six</a></li><li><a href="../../goingglobal/06_01/06_01_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../goingglobal/06_01/06_01_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../goingglobal/06_01/06_01_09.htm" title="Page Nine">Page Nine</a></li>';
	}	
	else if (unitNoLesNo == 0602) {
		pageDropdown = '<li><a href="../../goingglobal/06_02/06_02_01.htm" title="Page One">Page One</a></li><li><a href="../../goingglobal/06_02/06_02_02.htm" title="Page Two">Page Two</a></li><li><a href="../../goingglobal/06_02/06_02_03.htm" title="Page Three">Page Three</a></li><li><a href="../../goingglobal/06_02/06_02_04.htm" title="Page Four">Page Four</a></li><li><a href="../../goingglobal/06_02/06_02_05.htm" title="Page Five">Page Five</a></li><li><a href="../../goingglobal/06_02/06_02_06.htm" title="Page Six">Page Six</a></li><li><a href="../../goingglobal/06_02/06_02_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../goingglobal/06_02/06_02_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../goingglobal/06_02/06_02_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../goingglobal/06_02/06_02_10.htm" title="Page Ten">Page Ten</a></li>';
	}	
	else if (unitNoLesNo == 0603) {
		pageDropdown = '<li><a href="../../goingglobal/06_03/06_03_01.htm" title="Page One">Page One</a></li><li><a href="../../goingglobal/06_03/06_03_02.htm" title="Page Two">Page Two</a></li><li><a href="../../goingglobal/06_03/06_03_03.htm" title="Page Three">Page Three</a></li><li><a href="../../goingglobal/06_03/06_03_04.htm" title="Page Four">Page Four</a></li><li><a href="../../goingglobal/06_03/06_03_05.htm" title="Page Five">Page Five</a></li><li><a href="../../goingglobal/06_03/06_03_06.htm" title="Page Six">Page Six</a></li><li><a href="../../goingglobal/06_03/06_03_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../goingglobal/06_03/06_03_08.htm" title="Page Eight">Page Eight</a></li>';
	}		
	else if (unitNoLesNo == 0604) {
		pageDropdown = '<li><a href="../../goingglobal/06_04/06_04_01.htm" title="Page One">Page One</a></li><li><a href="../../goingglobal/06_04/06_04_02.htm" title="Page Two">Page Two</a></li><li><a href="../../goingglobal/06_04/06_04_03.htm" title="Page Three">Page Three</a></li><li><a href="../../goingglobal/06_04/06_04_04.htm" title="Page Four">Page Four</a></li><li><a href="../../goingglobal/06_04/06_04_05.htm" title="Page Five">Page Five</a></li><li><a href="../../goingglobal/06_04/06_04_06.htm" title="Page Six">Page Six</a></li><li><a href="../../goingglobal/06_04/06_04_07.htm" title="Page Seven">Page Seven</a></li>';
	}	
	else if (unitNoLesNo == 0605) {
		pageDropdown = '<li><a href="../../goingglobal/06_05/06_05_01.htm" title="Page One">Page One</a></li><li><a href="../../goingglobal/06_05/06_05_02.htm" title="Page Two">Page Two</a></li><li><a href="../../goingglobal/06_05/06_05_03.htm" title="Page Three">Page Three</a></li><li><a href="../../goingglobal/06_05/06_05_04.htm" title="Page Four">Page Four</a></li><li><a href="../../goingglobal/06_05/06_05_05.htm" title="Page Five">Page Five</a></li><li><a href="../../goingglobal/06_05/06_05_06.htm" title="Page Six">Page Six</a></li><li><a href="../../goingglobal/06_05/06_05_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../goingglobal/06_05/06_05_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../goingglobal/06_05/06_05_09.htm" title="Page Nine">Page Nine</a></li>';
	}			
	else if (unitNoLesNo == 0606) {
		pageDropdown = '<li><a href="../../goingglobal/06_06/06_06_01.htm" title="Page One">Page One</a></li><li><a href="../../goingglobal/06_06/06_06_02.htm" title="Page Two">Page Two</a></li><li><a href="../../goingglobal/06_06/06_06_03.htm" title="Page Three">Page Three</a></li><li><a href="../../goingglobal/06_06/06_06_04.htm" title="Page Four">Page Four</a></li><li><a href="../../goingglobal/06_06/06_06_05.htm" title="Page Five">Page Five</a></li><li><a href="../../goingglobal/06_06/06_06_06.htm" title="Page Six">Page Six</a></li><li><a href="../../goingglobal/06_06/06_06_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../goingglobal/06_06/06_06_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../goingglobal/06_06/06_06_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../goingglobal/06_06/06_06_10.htm" title="Page Ten">Page Ten</a></li>';
	}	
	else if (unitNoLesNo == 0607) {
		pageDropdown = '<li><a href="../../goingglobal/06_07/06_07_01.htm" title="Page One">Page One</a></li><li><a href="../../goingglobal/06_07/06_07_02.htm" title="Page Two">Page Two</a></li><li><a href="../../goingglobal/06_07/06_07_03.htm" title="Page Three">Page Three</a></li><li><a href="../../goingglobal/06_07/06_07_04.htm" title="Page Four">Page Four</a></li><li><a href="../../goingglobal/06_07/06_07_05.htm" title="Page Five">Page Five</a></li><li><a href="../../goingglobal/06_07/06_07_06.htm" title="Page Six">Page Six</a></li><li><a href="../../goingglobal/06_07/06_07_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../goingglobal/06_07/06_07_08.htm" title="Page Eight">Page Eight</a></li>';
	}	
	else if (unitNoLesNo == 0608) {
		pageDropdown = '<li><a href="../../goingglobal/06_08/06_08_01.htm" title="Page One">Page One</a></li><li><a href="../../goingglobal/06_08/06_08_02.htm" title="Page Two">Page Two</a></li><li><a href="../../goingglobal/06_08/06_08_03.htm" title="Page Three">Page Three</a></li><li><a href="../../goingglobal/06_08/06_08_04.htm" title="Page Four">Page Four</a></li><li><a href="../../goingglobal/06_08/06_08_05.htm" title="Page Five">Page Five</a></li><li><a href="../../goingglobal/06_08/06_08_06.htm" title="Page Six">Page Six</a></li>';
	}	
	else if (unitNoLesNo == 0609) {
		pageDropdown = '<li><a href="../../goingglobal/06_09/06_09_01.htm" title="Page One">Page One</a></li>';
	}	
	else if (unitNoLesNo == 0700) {
		pageDropdown = '<li><a href="../../servicelearning/07_00/07_00_01.htm" title="Page One">Page One</a></li><li><a href="../../servicelearning/07_00/07_00_02.htm" title="Page Two">Page Two</a></li><li><a href="../../servicelearning/07_00/07_00_03.htm" title="Page Three">Page Three</a></li><li><a href="../../servicelearning/07_00/07_00_04.htm" title="Page Four">Page Four</a></li><li><a href="../../servicelearning/07_00/07_00_05.htm" title="Page Five">Page Five</a></li><li><a href="../../servicelearning/07_00/07_00_06.htm" title="Page Six">Page Six</a></li><li><a href="../../servicelearning/07_00/07_00_07.htm" title="Page Seven">Page Seven</a></li><li><a href="../../servicelearning/07_00/07_00_08.htm" title="Page Eight">Page Eight</a></li><li><a href="../../servicelearning/07_00/07_00_09.htm" title="Page Nine">Page Nine</a></li><li><a href="../../servicelearning/07_00/07_00_10.htm" title="Page Ten">Page Ten</a></li><li><a href="../../servicelearning/07_00/07_00_11.htm" title="Page Eleven">Page Eleven</a></li><li><a href="../../servicelearning/07_00/07_00_12.htm" title="Page Twelve">Page Twelve</a></li><li><a href="../../servicelearning/07_00/07_00_13.htm" title="Page Thirteen">Page Thirteen</a></li><li><a href="../../servicelearning/07_00/07_00_14.htm" title="Page Fourteen">Page Fourteen</a></li><li><a href="../../servicelearning/07_00/07_00_15.htm" title="Page Fifteen">Page Fifteen</a></li><li><a href="../../servicelearning/07_00/07_00_16.htm" title="Page Sixteen">Page Sixteen</a></li>';
	}	
	
	$(document).ready(function() {

	$("dl#pages dd ul").empty().append(pageDropdown);
	
	});
}
	
	


getLessonLinks();
getPages();
getLessonTitles();
getUnitTitles();
