var APIKey = "96aa363d6b8b4e798af15863b16aaf0e";
renderRecepie();

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

function renderRecepie() {
    var recepieID = getUrlParameter("recepie-id");
    var queryURL = "https://api.spoonacular.com/recipes/" + recepieID + "/information?includeNutrition=false&apiKey=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#recipetitle").text(response.title);
        $("#RecipeImage").attr("src", (response.image));
        checkproperty(response.vegetarian, "#vegetarian");
        checkproperty(response.vegan, "#vegan");
        checkproperty(response.glutenFree, "#gluten3");
        checkproperty(response.dairyFree, "#dairy3");
        $("#recipeSummary").html(response.summary);
        var instructions = (response.instructions);
        var splitInstructions = instructions.split(".");
        for (i = 0; i < splitInstructions.length; i ++) {
            if (splitInstructions[i] !== "") {
                var ins = $("<li>");
                ins.text(splitInstructions[i]);
                $("#instructions").append(ins);
            }
        }
        var ingredients = (response.extendedIngredients);
        for (i = 0; ingredients.length; i ++) {
            var ingre = $("<li>");
            ingre.text(ingredients[i].name)
            $("#ingredients").append(ingre);
        }
    });
   

}

function checkproperty(property, container) {
    if (property) {
        $(container).prop("checked", true);
    } else {
        $(container).prop("checked", false);
    }
}

// function generateRecepieTile(recepie) {
//     var divRecepieCard = $("#recipeCard");
//     var divCard0i = $("<div>");
//     divCard0i.addClass("media searchresults");
//     var img0i = $("<img>");
//     //img0i.add
//     img0i.attr("src", recepie.image);
//     img0i.addClass("align-self-start mr-3 recipeimage");
    
<<<<<<< HEAD
    divCard0i.append(img0i);

    var divMedia0i = $("<div>");
    divMedia0i.addClass("media-body");
    var h5RecepieTitle0i = $("<h5>");
    h5RecepieTitle0i.addClass("mt-0");
    h5RecepieTitle0i.attr("id", "recipetitle3");
    h5RecepieTitle0i.text(recepie.title);
    divMedia0i.append(h5RecepieTitle0i);

    var para0i = $("<p>");
    para0i.text(recepie.instructions);
    divMedia0i.append(para0i);

    var aTag0i = $("<a>");
    
    var spanOfATag0i = $("<span>");
    spanOfATag0i.addClass("divlink");
    aTag0i.append(spanOfATag0i);
    divMedia0i.append(aTag0i);

    divCard0i.append(divMedia0i);
    divRecepieCard.append(divCard0i);
}
=======
//     divCard0i.append(img0i);

//     var divMedia0i = $("<div>");
//     divMedia0i.addClass("media-body");
//     var h5RecepieTitle0i = $("<h5>");
//     h5RecepieTitle0i.addClass("mt-0");
//     h5RecepieTitle0i.attr("id", "recipetitle3");
//     h5RecepieTitle0i.text(recepie.title);
//     divMedia0i.append(h5RecepieTitle0i);

//     var para0i = $("<p>");
//     para0i.text(recepie.instructions);
//     divMedia0i.append(para0i);

//     divCard0i.append(divMedia0i);
//     divRecepieCard.append(divCard0i);
// }
>>>>>>> f5b1c390656f3a93c316cc8f90a24473fd4b459c
