
$(() => {
    const inpSec = $("#inpSec")
    const tableSec = $("#tableSec");

    inpSec.append($('<input type = "text" name = "" id = "userVal" placeholder = "Search Something"/> ')).append($('<div class="py-2"><label for="upperCase">UpperCase</label><input type="checkbox" name="upperCase" id="upperCase" class="mx-2" /></div>'))

    tableSec.append($("<table class='table' id='table'>").append($("<thead id='thead'>").append($("<tr id='theadRow'>"))));

    tableSec.children("#table").append("<tbody id='tbody'>");

    $.ajax({
        type: "GET",
        url: "/js/table.json",
        success: function (data, status, xhr) {
            $.each(data, function (key, val) {
                if (key === 0) {
                    const keyJson = Object.keys(val)
                    // console.log(keyJson)
                    $.each(keyJson, function (key, val) {
                        $("#table").find('#thead')
                            .find("#theadRow")
                            .append($('<th>').text(val))
                    })
                }

                $("#table").find('#tbody')
                    .append($('<tr>')
                        .append($('<th>').text(data[key].id))
                        .append($('<td>').text(data[key].firstName))
                        .append($('<td>').text(data[key].lastName))
                        .append($('<td>').text(data[key].PhoneNo))
                        .append($('<td>').text(data[key].handel))
                    );
            })
        }


    })

    $("#userVal").on("keyup", function () {
        console.log(this)
        let value = $(this).val().trim().toLowerCase();
        $("#table #tbody tr").filter(function () {
            // console.log($(this).text().toLowerCase().indexof(value))
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
            $("#userVal").on("keyup", function () {
                console.log(this)
                let value = $(this).val().trim();
                $("#table #tbody tr").filter(function () {
                    $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
                });
            });
        }
        else if ($(this).prop("checked") == false) {
            $("#userVal").on("keyup", function () {
                console.log(this)
                let value = $(this).val().trim().toLowerCase();
                $("#table #tbody tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        }
    });


})