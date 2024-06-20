const table_body = document.querySelector(".table_body");
// const locationid = document.querySelector("#locationid");
// const deviceid = document.querySelector("#deviceid");
// const unit = document.querySelector("unit");

$("#search_from").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  if (data.locationid && data.deviceid) {
    var request = {
      url: `http://animalhospital.freemyip.com/sensor/measurement?locationid=${data.locationid}&deviceid=${data.deviceid}`,
      method: "GET",
    };
  } else if (data.unit) {
    var request = {
      url: `http://animalhospital.freemyip.com/sensor/measurement?unit=${data.unit}`,
      method: "GET",
    };
  } else {
    var request = {
      url: `http://animalhospital.freemyip.com/sensor/measurement?locationid=${data.locationid}&deviceid=${data.deviceid}&unit=${data.unit}`,
      method: "GET",
    };
  }
  $.ajax(request).done(function (data) {
    table_body.innerHTML = `${data.map((item) => {
      return ` <tr>
       <td>${item.locationid}</td>
       <td>${item.deviceid}</td>
       <td>${item.unit}</td>
       <td>${item.timestamp}</td>
       <td>${item.amount}</td>
     </tr>`;
    })}`;
  });
});
