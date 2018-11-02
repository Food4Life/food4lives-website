$(document).ready(function () {
  $('.event-details').css('display', 'none');
  $('.event-details').css('height', 'auto');
  $('.event-details').css('margin-top', '-17px');
  $('.event-details > .info').css('height', 'auto');
  $('.disabled').prev().css('cursor', 'default');

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  $.get('https://www.eventbriteapi.com/v3/events/search/?token=KD7P2QC25Y3UVP5DRWS4&organizer.id=18079396040', function (data, status) {
    var events = data.events;
    if (events.length == 0) {
      $('#no-upcoming').removeClass('hidden');
    } else {
      console.log(events.length);
      events.forEach(function (elem) {
        var d = new Date(elem.start.utc);
        var month = monthNames[d.getMonth()];
        var eventItem = makeEvent(elem.name.text, elem.url, month, d.getDate(), d.getFullYear());
        $('#event-list').append(eventItem);
      });
    }
  });

  // $('.event-list > li').click(function () {
  //   if (!$(this).nextAll('.event-details').first().hasClass('disabled')) {
  //     //$(this).nextAll('.event-details').first().height('auto');
  //     $(this).nextAll('.event-details').first().nextAll('.info').first().height('auto');
  //     $(this).nextAll('.event-details').first().slideToggle();
  //   }
  // });
})


function makeEvent(name, url, month, day, year) {
  return `<li>
    <time>
      <span class="day">${day}</span>
      <span class="month">${month}</span>
      <span class="year">${year}</span>
      <span class="time">ALL DAY</span>
    </time>
    <div class="info">
      <h2 class="title" style="font-size: 2em;margin: 4px;">${name}</h2>
      <button onclick="window.open('${url}', '_blank');" style="margin: 10px;" type="button" class="btn btn-success">RSVP</button>
      <button onclick="window.open('${url}', '_blank');" style="margin: 10px;" type="button" class="btn btn-warning">More Details</button>
    </div>
  </li>`;
}