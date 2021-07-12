function myFunction() {

    var input, filter, ul, li, a, i;

    input = document.getElementById("myInput");

    filter = input.value.toUpperCase();

    ul = document.getElementById("myUL");

    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";

        } else {

            li[i].style.display = "none";

        }

    }

}
$(document).ready(displayCheckbox);



function displayCheckbox() {



    var checkboxes = $("input[type=checkbox]");



    $.each(checkboxes, function () {

        $(this).change(printChecked);

    })



    function printChecked() {

        var checkedIds = [];



        // for each checked checkbox, add it's id to the array of checked ids

        checkboxes.each(function () {

            if ($(this).is(':checked')) {

                checkedIds.push($(this).attr('value') + "<br>");

                console.log(checkedIds);

            }

        });



        // displayField.val(checkedIds);

        abc.innerHTML = checkedIds;

    }