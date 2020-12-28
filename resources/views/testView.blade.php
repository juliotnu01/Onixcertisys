<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script sync src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script sync src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js"></script>
    <script sync src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/FileSaver.js/2.0.5/FileSaver.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js" integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ==" crossorigin="anonymous"></script>
    <script>
        var ExcelToJSON = function() {

            this.parseExcel = function(file) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    var data = e.target.result;
                    var workbook = XLSX.read(data, {
                        type: 'binary',
                        bookVBA: true
                    });

                    /* bookType can be any supported output type */
                    var wopts = {
                        bookType: 'xlsm',
                        bookSST: false,
                        type: 'binary',
                        bookVBA: true
                    };

                    var wbout = XLSX.writeFile(workbook, wopts);

                    /* the saveAs call downloads a file on the local machine */
                    // saveAs(new Blob([wbout], {
                    //     type: "application/octet-stream"
                    // }), "test.xlsm");

                    // workbook.SheetNames.forEach(function(sheetName) {
                    //     // Here is your object
                    //     var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    //     var json_object = JSON.stringify(XL_row_object);
                    //     console.log(json_object);

                    // })

                };

                reader.onerror = function(ex) {
                    console.log(ex);
                };

                reader.readAsBinaryString(file);
            };
        };

        function handleFile(e) {
            var files = e.target.files,
                f = files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                var data = new Uint8Array(e.target.result);
                var workbook = XLSX.read(data, {
                    bookType: 'xlsm',
                    bookSST: false,
                    type: 'array',
                    bookVBA: true
                });

                var first_sheet_name = workbook.SheetNames[1];
                var address_of_cell = 'C5';

                /* Get worksheet */
                var worksheet = workbook.Sheets[first_sheet_name];

                var wopts = {
                    bookType: 'xlsm',
                    bookSST: false,
                    type: 'binary',
                    bookVBA: true
                };

                var wbout = XLSX.write(workbook, { bookType: 'xlsm', type: 'binary' });

                /* the saveAs call downloads a file on the local machine */
                saveAs(new Blob([wbout], {
                    type: "application/octet-stream"
                }));
            };
            reader.readAsArrayBuffer(f);
        }
    </script>
    <title>Document</title>
</head>

<body>
    <form enctype="multipart/form-data">
        <input id="upload" type=file name="files[]">
    </form>
    <textarea class="form-control" rows=35 cols=120 id="xlx_json"></textarea>

</body>
<script>
    document.getElementById('upload').addEventListener('change', handleFile, false);
</script>

</html>