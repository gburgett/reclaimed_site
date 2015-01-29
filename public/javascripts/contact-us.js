require(['jquery'], function($){

	var otherText = "";
	function cbOther_OnChange() {
		if($("#cbOther").is(":checked")) {
			$("#inputOther").removeAttr("disabled").attr("placeholder", "Tell us what you're interested in!").focus();
			if(otherText && otherText != ""){
				$("#inputOther").val(otherText);
				otherText = "";
			}
		}
		else{
			$("#inputOther").attr("disabled", true).removeAttr("placeholder");
			otherText = $("#inputOther").val();
			$("#inputOther").val("");
		}
	}

	$("#cbOther").change(cbOther_OnChange);
	cbOther_OnChange();

});
