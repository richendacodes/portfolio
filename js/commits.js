$(document).ready(function() {
  $(".list-group").on("click", "a", function(e) {
    e.preventDefault();
    
    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits) {
        $("tbody").empty();
        for(var i = 0; i < commits.length; i++) {
          $("tbody").append(buildTableRow(commits[i]));
        }
      }
    })
  });

  function buildTableRow(commitData) {
    var authorTd = $("<td>").append(commitData.commit.author.name);
    var authorLink = $("<a>").attr("href", commitData.html_url).append(authorUrl).append(commitData.commit.message);
    var dateTd = $("<td>").append(commitData.commit.author.date);
    var authorUrl = $("<td>").append(commitData.html_url);

    var messageLink = $("<td>").append(authorUrl);


    return $("<tr>")
      .append(authorTd)
      .append($("<td>").append(authorLink))
      .append(dateTd);
;
  }
});