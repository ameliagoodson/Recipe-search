
// Adding new ingredents to array
var ingredients = []

$("#ingredientsubmit").on("click", function() {
    event.preventDefault();
    var newingredient = $("#ingredientInput").val()
    if (newingredient.length === 0) {
        $("#ingredientInput").attr("placeholder","Please type an ingredient.")
        return
    } else {
        ingredients.push(newingredient)
        $("#ingredientInput").val("")
        $("#ingredientInput").attr("placeholder","Ingredient added to list!")
        console.log(ingredients)
    }
})
getrecipes()

function getrecipes() {
    var params = "apples"
    $.ajax({
        url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + params + "&number=4&apiKey=e3e93aa7206d483b81dc3f846d64e8c4",
        method: "GET"
    }).then(function(response) {
        console.log(response)
        for(i = 0; i < 4; i++) {
            var recipeno = i + 1;
            $("#recipetitle" + recipeno).text(response[i].title);
            $("#recipeimg" + recipeno).attr("src", (response[i].image));
            var recipeid = (response[i].id); 
            var recipeUrl = ("https://api.spoonacular.com/recipes/" + recipeid + "/information?includeNutrition=false&apiKey=e3e93aa7206d483b81dc3f846d64e8c4")
            $.ajax({
                url: recipeUrl,
                method: "GET"
            }).then(function(response) {
                console.log(response.sourceUrl)
            })
        }
    }
)}