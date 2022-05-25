$(function() {
     $("#myTable").DataTable({
      // retrieve: true,
      columnDefs: [
        { className: "my_class", targets: "_all" },
        {
          targets: -1,
          className: "dt[-head|-body]-center"
        }
    ],
     });
});