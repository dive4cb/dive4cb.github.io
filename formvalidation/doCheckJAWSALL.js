        function doCheck() {
            var x = document.getElementById("uidTest").value;

            //check 1 - min length
            if (x.length < 5 && $("div#valItem1Div").attr("data-status") != "1") {
                $("div#valItem1Div img").attr("alt", "Fail, Minimum Length. ");
                $("div#valItem1Div img").attr("title", "Fail, Minimum Length. ");
                $("div#valItem1Div img").attr("src", "red.jpg");
                $("div#valItem1Div").attr("data-status", "1");
            } else if (x.length >= 5 && $("div#valItem1Div").attr("data-status") != "2") {
                $("div#valItem1Div img").attr("alt", "Pass, Minimum Length. ");
                $("div#valItem1Div img").attr("title", "Pass, Minimum Length. ");
                $("div#valItem1Div img").attr("src", "green.jpg");
                $("div#valItem1Div").attr("data-status", "2");
            }

            //check 2 - max length
            if (x.length > 32 && $("div#valItem2Div span").attr("data-status") != "1") {
                $("div#valItem2Div img").attr("alt", "Fail, Maximum Length. ");
                $("div#valItem2Div img").attr("title", "Fail, Maximum Length. ");
                $("div#valItem2Div img").attr("src", "red.jpg");
                $("div#valItem2Div").attr("data-status", "1");
            } else if (x.length <= 32 && $("div#valItem2Div").attr("data-status") != "2") {
                $("div#valItem2Div img").attr("alt", "Pass, Maximum Length. ");
                $("div#valItem2Div img").attr("title", "Pass, Maximum Length. ");
                $("div#valItem2Div img").attr("src", "green.jpg");
                $("div#valItem2Div").attr("data-status", "2");
            }

            //check 3 - minimum one letter 
            var re1 = /[aA-zZ]/g;
            var ccc = re1.test(x);
            if (ccc == false && $("div#valItem3Div span").attr("data-status") != "1") {
                $("div#valItem3Div img").attr("alt", "Fail, At Least One Letter. ");
                $("div#valItem3Div img").attr("title", "Fail, At Least One Letter. ");
                $("div#valItem3Div img").attr("src", "red.jpg");
                $("div#valItem3Div").attr("data-status", "1");
            } else if (ccc == true && $("div#valItem3Div").attr("data-status") != "2") {
                $("div#valItem3Div img").attr("alt", "Pass, At Least One Letter. ");
                $("div#valItem3Div img").attr("title", "Pass, At Least One Letter. ");
                $("div#valItem3Div img").attr("src", "green.jpg");
                $("div#valItem3Div").attr("data-status", "2");
            }

            //check 4 - special characters
            //note: a blank space is permitted because there is a separate check for that
            var re2 = /[^\sA-Za-z0-9\^_-]/g;
            var ddd = re2.test(x);
            if (ddd == true && $("div#valItem4Div span").attr("data-status") != "1") {
                $("div#valItem4Div img").attr("alt", "Fail, Acceptable Special Characters. ");
                $("div#valItem4Div img").attr("title", "Fail, Acceptable Special Characters. ");
                $("div#valItem4Div img").attr("src", "red.jpg");
                $("div#valItem4Div").attr("data-status", "1");
            } else if (ddd == false && $("div#valItem4Div").attr("data-status") != "2") {
                $("div#valItem4Div img").attr("alt", "Pass, Acceptable Special Characters. ");
                $("div#valItem4Div img").attr("title", "Pass, Acceptable Special Characters. ");
                $("div#valItem4Div img").attr("src", "green.jpg");
                $("div#valItem4Div").attr("data-status", "2");
            }

            //check 5 - no spaces
            var re3 = /\s/g;
            var eee = re3.test(x);
            if (eee == true && $("div#valItem5Div span").attr("data-status") != "1") {
                $("div#valItem5Div img").attr("alt", "Fail, No Spaces Allowed. ");
                $("div#valItem5Div img").attr("title", "Fail, No Spaces Allowed. ");
                $("div#valItem5Div img").attr("src", "red.jpg");
                $("div#valItem5Div").attr("data-status", "1");
            } else if (eee == false && $("div#valItem5Div").attr("data-status") != "2") {
                $("div#valItem5Div img").attr("alt", "Pass, No Spaces Allowed. ");
                $("div#valItem5Div img").attr("title", "Pass, No Spaces Allowed. ");
                $("div#valItem5Div img").attr("src", "green.jpg");
                $("div#valItem5Div").attr("data-status", "2");
            }
            //comprehensive state
            var howmany = $('div[data-status="2"]').not("div#valItemCompDiv").length;


            if (howmany < 5 && $("div#valItemCompDiv").attr("data-status") != "1") {
                $("div#valItemCompDiv img, div#valItemCompDiv2 img").attr("alt", "Fail, Username Is Valid. ");
                $("div#valItemCompDiv img, div#valItemCompDiv2 img").attr("src", "red.jpg");
                $("input#saveUserID").prop("disabled", true);
                $("div#valItemCompDiv").attr("data-status", "1");
                $("#stateannounce p").empty();
            } else if (howmany >= 5 && $("div#valItemCompDiv").attr("data-status") != "2") {
                $("div#valItemCompDiv img, div#valItemCompDiv2 img").attr("alt", "Pass, Username Is Valid. ");
                $("div#valItemCompDiv img, div#valItemCompDiv2 img").attr("src", "green.jpg");
                $("div#valItemCompDiv").attr("data-status", "2");
                $("input#saveUserID").removeAttr("disabled");
            }

        }

        function submitSuccess() {

            alert("Your Information Has Been Updated");
            window.location.reload();
            $("input#saveUserID").prop("disabled", true);

        }