<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }
        #cabecera_logo{
            background: rgba(0,49,119,1);
            max-height: 300px;
        }
        #img_logo{
            float: right;
        }
         
    </style>
</head>

<body>

    <h2>Cotizacion</h2>

    <table>
        <tr>
            <th colspan="3" id="cabecera_logo">
                <img src="{{ asset('img/accredian-bco.png')}}" alt="logo de la empresa" id="img_logo" />
            </th>
        </tr>
        <tr>
            <td>
                
            </td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
        </tr>
        <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
        </tr>
        <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
        </tr>
        <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
        </tr>
    </table>

</body>

</html>