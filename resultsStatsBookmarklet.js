
function toFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var resultsTable = document.getElementById('results');
var rows = resultsTable.querySelectorAll('tbody tr');
var pbs = 0, firstTimers = 0, m = 0, f = 0, totalRuns = 0;
rows.forEach(function(row) {

    if (row.childNodes[8].textContent === 'New PB!') {
        pbs++;
    }
    if (row.childNodes[8].textContent === 'First Timer!') {
        firstTimers++;
    }

    if (row.childNodes[5].textContent === 'M') {
        m++;
    }
    if (row.childNodes[5].textContent === 'F') {
        f++;
    }

    if (row.childNodes[9].textContent !== '') {
        totalRuns = totalRuns + parseInt(row.childNodes[9].textContent);
    }
});

var club100 = resultsTable.querySelectorAll('img[src="https://images.parkrun.com/website/results/100_club_mini.jpg"]').length;
var club50 = resultsTable.querySelectorAll('img[src="https://images.parkrun.com/website/results/50_club_mini.jpg"]').length;
var club250 = resultsTable.querySelectorAll('img[src="https://images.parkrun.com/website/results/250_club_mini.jpg"]').length;

var stats = document.createElement('div');
stats.id = 'BmlStats';
stats.innerHTML = `
<style type="text/css">
#BmlStats {
    position:absolute;top:0;right:0;padding:0;
    background: #F2EFE8;
    color: #5c4710;
    font-size:13px;font-family:arial,sans-serif;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
}
#BmlStats td.val { text-align: right; font-weight: bold; color: #957F45; font-size: 16px; }
#BmlStats td {
    border-bottom: 1px solid #EAE8CC;
    padding: 14px 20px;
    vertical-align: bottom;
}
#bmlStats tr:last-child td { border-bottom:0 }

</style>
<table id="bmlStats" cellmargin="0">
<tr><td>Runners</td><td class="val">`+ toFormat(rows.length) +`</td></tr>
<tr><td>M / F</td><td class="val">`+ m + ' / ' + f +`</td></tr>
<tr><td>Total runs</td><td class="val">`+ toFormat(totalRuns) +`</td></tr>
<tr><td>PBs</td><td class="val">`+ pbs +`</td></tr>
<tr><td>First Timers</td><td class="val">`+ firstTimers +`</td></tr>
<tr><td>50 Club</td><td class="val">`+ club50 +`</td></tr>
<tr><td>100 Club</td><td class="val">`+ club100 +`</td></tr>
<tr><td>250 Club</td><td class="val">`+ club250 +`</td></tr>
</table>
`;

document.body.appendChild(stats);

