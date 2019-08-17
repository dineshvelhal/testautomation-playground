function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var rr = "*".repeat(getRandomInt(5) + 1);

var parser = new DOMParser();
var domString = `<template id="book_template">
    <style>
        .book-label{
            -webkit-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
            box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
            border-color:#2780E3 !important;
            border:1px solid rgba(0,0,0,0.125);
            background-color:#fff;
            -webkit-box-orient:vertical;
            -webkit-box-direction:normal;
            padding:5px;
            margin:5px;
            text-align:center
        }

        .rating{
            color:#3FB618
        }
    
    </style>
    <table>
        <tr>
            <th class="book-label">Bookd</th>
            <th class="book-label rating">Rating</th>
        </tr>
        <tr>
            <td class="book-label" id="book_name">Sapiens: A Brief History of the Humankind</td>
            <td class="book-label rating" id="star_rating">` + rr + `</td>
        </tr>
    </table>
</template>`;

var html = parser.parseFromString(domString, 'text/html');

var template = html.head.firstChild;

var shadow = document.querySelector('#book').attachShadow({
    mode: 'open'
});
var clone = document.importNode(template.content, true);
shadow.appendChild(clone);



$("#check_rating2").click(function () {
    if (rr == $("#txt_rating_2").val()) {
        $("#validate_rating2")
            .text("Well done!")
            .attr("class", "badge badge-success");
    } else {
        $("#validate_rating2")
            .text("Try Again!")
            .attr("class", "badge badge-danger");
    }
});