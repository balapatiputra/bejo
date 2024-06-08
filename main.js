<script>
        function addNewItem(tingkatPendidikan, jurusan, sekolah, tahun) {
            // Get the table by its ID
            var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];

            // Create a new row
            var newRow = table.insertRow();

            // Create cells for each column
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);

            // Add text to the cells
            cell1.textContent = tingkatPendidikan;
            cell2.textContent = jurusan;
            cell3.textContent = sekolah;
            cell4.textContent = tahun;
            
            // Add an action link to the last cell
            var deleteLink = document.createElement("a");
            deleteLink.href = "#";
            deleteLink.onclick = function() { 
                return confirm('Yakin Hapus?');
            };
            deleteLink.textContent = "Hapus";
            cell5.appendChild(deleteLink);
        }

        document.addEventListener("DOMContentLoaded", function() {
            addNewItem("D3", "INFORMATIKA", "Politeknik XYZ", "2025");
        });
</script>
