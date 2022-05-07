function addLoadEvent(func) {
    var oldonload = window.onload;
    console.log(oldonload);
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
    console.log(window.onload);
}
var jsonText = "";

// $('textarea').numberedtextarea();
var current_json = '';
var current_content = '';
var current_json_str = '';
var xml_flag = false;
var zip_flag = false;
var shown_flag = false;
var compress_flag = false;

function handleTextChanged() {

    var options = {
        collapsed: false,
        withQuotes: true
    }
    try {
        if (jQuery == undefined) {
            console.log("jQuery is undefined")
            return;
        }
        jsonText = document.getElementById("json-source-text").value;
        if (document.getElementById("escapeCheckBox").checked) {
            jsonText = jsonText.replace(/\\/g, '\\\\');
            jsonText = jsonText.replace(/\\"/g, '\\\\"');
            // jsonText = jsonText.replaceAll("\\","\\\\")
        }
        var result = jsonlint.parse(jsonText);
        if (result) {
            //   document.getElementById("json-render").innerHTML = "JSON is valid!";
            //   document.getElementById("json-render").className = "pass";
            //   if (document.getElementById("json-render").checked) {
            //     document.getElementById("json-render").value = JSON.stringify(result, null, "  ");
            //   }
            current_json_str = JSON.stringify(result)
            var jsonStr = eval('(' + jsonText + ')')
            // alert(jsonStr)
            $("#json-render").jsonViewer(jsonStr, options)
            //   document.getElementById("json-render").value = JSON.stringify(document.getElementById("json-source-text").value, null, "  ");
            document.getElementById("json-render").className = "success";

        }
    } catch (e) {
        document.getElementById("json-render").innerHTML = e;
        document.getElementById("json-render").className = "fail";
        current_json_str = e;
    }
}

addLoadEvent(
    () => {
        if (document.getElementById("json-source-text").value != '') {
            handleTextChanged();
        }
        document.getElementById("json-source-text").onkeyup = function () {
            handleTextChanged();
        };
        document.getElementById("keepEscapeBtn").onclick = function () {
            document.getElementById("escapeCheckBox").checked = !document.getElementById("escapeCheckBox").checked;
            handleTextChanged();
        }
        document.getElementById("zipBtn").onclick = function () {
            if (zip_flag) {
                zip_flag = false;
                $(this).attr('style', 'color:#999;');
                handleTextChanged();
            } else {
                //$('#json-target').html(current_json_str.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
                $('#json-render').html("<xmp>" + current_json_str + "</xmp>");
                zip_flag = true;
                $(this).attr('style', 'color:#15b374;');
            }
        }
        // document.getElementById("copyBtn").onclick = function(){
        // }

        document.getElementById("toXmlBtn").onclick = function () {
            if (xml_flag) {
                xml_flag = false;
                $(this).attr('style', 'color:#999;');
                handleTextChanged();
            } else {
                //$('#json-target').html(current_json_str.replace(/</g,"&lt;").replace(/>/g,"&gt;"));

                var xml = $.json2xml(current_json_str, {})
                $('#json-render').html('<textarea style="width:100%;background:#fbfbfb;height: 100%;border:0;resize:none;">' + xml + '</textarea>');
                xml_flag = true;
                $(this).attr('style', 'color:#15b374;');
            }

        }
        // document.getElementById("toJavaBtn").onclick = function () {}
        document.getElementById("save").onclick = function () {
            // var content = JSON.stringify(current_json);
            // $('#txt-content').val(content);
            //var text = "hell world";

            if (xml_flag) {
                var text = document.getElementById('json-render').getElementsByTagName('textarea')[0].value.replace('　　', '    ');
                var blob = new Blob([text], {
                    type: "application/xml;charset=utf-8"
                });
                var timestamp = new Date().getTime();
                saveAs(blob, "cutool." + timestamp + ".xml");
            } else {
                var text = document.getElementById('json-render').innerText.replace('　　', '    ');
                var blob = new Blob([text], {
                    type: "application/json;charset=utf-8"
                });
                var timestamp = new Date().getTime();
                saveAs(blob, "cutool." + timestamp + ".json");
            }
        }
    }


)
