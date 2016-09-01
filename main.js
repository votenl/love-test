$(document).ready(function(){

    $("#go").click(function(){
        var name1 = $("#name1").val();
        var name2 = $("#name2").val();

        var value = 0;

        for(var i=0;i<name1.length;i++){
            value += name1.charCodeAt(i);
        }
        for(var i=0;i<name2.length;i++){
            value += name2.charCodeAt(i);
        }

        var anzahlBuchstaben = name1.length+name2.length;

        var minimum = 65*anzahlBuchstaben;
        var maximum = 122*anzahlBuchstaben;
        value = convertToRange(value, [minimum, maximum], [0, 100]);

        value = Math.round(value);
        $("#outputText").text(value+"%");
        $("#output").css("width", value+"%");
    });

});



function convertToRange(value, srcRange, dstRange){
  // value is outside source range return
  if (value < srcRange[0] || value > srcRange[1]){
    return NaN;
  }

  var srcMax = srcRange[1] - srcRange[0],
      dstMax = dstRange[1] - dstRange[0],
      adjValue = value - srcRange[0];

  return (adjValue * dstMax / srcMax) + dstRange[0];
}
