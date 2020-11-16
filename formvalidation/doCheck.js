        function doCheck() {
            var x = document.getElementById("uidTest").value;

            //check 1 - min length
            if (x.length < 5 && $("div#valItem1Div").attr("data-status") != "1") {

                $("div#valItem1Div img").attr("alt", "Fail, Minimum Length. ");
                $("div#valItem1Div img").attr("src", "red.jpg");
                $("div#valItem1Div span").text("Fail, Minimum Length. ");
                $("div#valItem1Div").attr("data-status", "1");
                $("#stateannounce p").empty();
            } else if (x.length >= 5 && $("div#valItem1Div").attr("data-status") != "2") {
                $("div#valItem1Div img").attr("alt", "Pass, Minimum Length. ");
                $("div#valItem1Div img").attr("src", "green.jpg");
                $("div#valItem1Div span").text("Pass, Minimum Length. ");
                $("div#valItem1Div").attr("data-status", "2");
                $("#stateannounce2 p").empty();
            }

            //check 2 - max length
            if (x.length > 32 && $("div#valItem2Div span").attr("data-status") != "1") {
                $("div#valItem2Div img").attr("alt", "Fail, Maximum Length. ");
                $("div#valItem2Div img").attr("src", "red.jpg");
                $("div#valItem2Div span").text("Fail, Maximum Length. ");
                $("div#valItem2Div").attr("data-status", "1");
                $("#stateannounce p").empty();
            } else if (x.length <= 32 && $("div#valItem2Div").attr("data-status") != "2") {
                $("div#valItem2Div img").attr("alt", "Pass, Maximum Length. ");
                $("div#valItem2Div img").attr("src", "green.jpg");
                $("div#valItem2Div span").text("Pass, Maximum Length. ");
                $("div#valItem2Div").attr("data-status", "2");
                $("#stateannounce2 p").empty();
            }

            //check 3 - minimum one letter 
            var re1 = /[aA-zZ]/g;
            var ccc = re1.test(x);
            if (ccc == false && $("div#valItem3Div span").attr("data-status") != "1") {
                $("div#valItem3Div img").attr("alt", "Fail, At Least One Letter. ");
                $("div#valItem3Div img").attr("src", "red.jpg");
                $("div#valItem3Div span").text("Fail, At Least One Letter. ");
                $("div#valItem3Div").attr("data-status", "1");
                $("#stateannounce p").empty();
            } else if (ccc == true && $("div#valItem3Div").attr("data-status") != "2") {
                $("div#valItem3Div img").attr("alt", "Pass, At Least One Letter. ");
                $("div#valItem3Div img").attr("src", "green.jpg");
                $("div#valItem3Div span").text("Pass, At Least One Letter. ");
                $("div#valItem3Div").attr("data-status", "2");
                $("#stateannounce2 p").empty();
            }

            //check 4 - special characters
            //note: a blank space is permitted because there is a separate check for that
            var re2 = /[^\sA-Za-z0-9\^_-]/g;
            var ddd = re2.test(x);
            if (ddd == true && $("div#valItem4Div span").attr("data-status") != "1") {
                $("div#valItem4Div img").attr("alt", "Fail, Acceptable Special Characters. ");
                $("div#valItem4Div img").attr("src", "red.jpg");
                $("div#valItem4Div span").text("Fail, Acceptable Special Characters. ");
                $("div#valItem4Div").attr("data-status", "1");
                $("#stateannounce p").empty();
            } else if (ddd == false && $("div#valItem4Div").attr("data-status") != "2") {
                $("div#valItem4Div img").attr("alt", "Pass, Acceptable Special Characters. ");
                $("div#valItem4Div img").attr("src", "green.jpg");
                $("div#valItem4Div span").text("Pass, Acceptable Special Characters. ");
                $("div#valItem4Div").attr("data-status", "2");
                $("#stateannounce2 p").empty();
            }

            //check 5 - no spaces
            var re3 = /\s/g;
            var eee = re3.test(x);
            if (eee == true && $("div#valItem5Div span").attr("data-status") != "1") {
                $("div#valItem5Div img").attr("alt", "Fail, No Spaces Allowed. ");
                $("div#valItem5Div img").attr("src", "red.jpg");
                $("div#valItem5Div span").text("Fail, No Spaces Allowed. ");
                $("div#valItem5Div").attr("data-status", "1");
                $("#stateannounce p").empty();
            } else if (eee == false && $("div#valItem5Div").attr("data-status") != "2") {
                $("div#valItem5Div img").attr("alt", "Pass, No Spaces Allowed. ");
                $("div#valItem5Div img").attr("src", "green.jpg");
                $("div#valItem5Div span").text("Pass, No Spaces Allowed. ");
                $("div#valItem5Div").attr("data-status", "2");
                $("#stateannounce2 p").empty();
            }
            //comprehensive state
            var howmany = $('div[data-status="2"]').not("div#valItemCompDiv").length;

            if (howmany < 5 && $("div#valItemCompDiv").attr("data-status") != "1") {
                $("div#valItemCompDiv img").attr("alt", "Fail, Username Is Invalid. ");
                $("div#valItemCompDiv img").attr("src", "red.jpg");
                $("input#saveUserID").prop("disabled", true);
                $("div#valItemCompDiv").attr("data-status", "1");
                $("#stateannounce p").empty();
            } else if (howmany >= 5 && $("div#valItemCompDiv").attr("data-status") != "2") {
                $("div#valItemCompDiv img").attr("alt", "Pass, Username Is Valid. ");
                $("div#valItemCompDiv img").attr("src", "green.jpg");
                
                $("div#valItemCompDiv").attr("data-status", "2");
                $("#stateannounce p").text("User ID is now valid.");
                $("input#saveUserID").removeAttr("disabled");
                $("#stateannounce2 p").empty();
            }

            //            $('div[id^="valItem"] img').each(function () {
            //                var alttext = $(this).attr("alt");
            //                if ($(this).attr("data-status") == "1") {
            //                    $("#stateannounce2 p").append(alttext);
            //                };
            //
            //            });
            $('ul li div[id^="valItem"] img').each(function () {
                var alttext = $(this).attr("alt");
                var totcode = "<span>" + alttext + "</span>";
                var jjj = $(this).parent().attr("data-status");
//alert(alttext);
  //              alert(jjj);
                if (jjj == "1" && $("#stateannounce2 p").html().indexOf(totcode) < 0) {
                    $("#stateannounce2 p").append(totcode);
                };

            });
        }

        function submitSuccess() {

            alert("Your Information Has Been Updated");
            window.location.reload();
            $("input#saveUserID").prop("disabled", true);

        }