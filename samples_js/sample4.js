
var stores = ["London", "Paris", "Milan"];
var store = (new URLSearchParams(location.search)).get('storeId');
document.write('<select name="storeId">');
if (store) {
    document.write('<option selected>' + store + '</option>');
}
for (var i = 0; i < stores.length; i++) {
    if (stores[i] === store) {
        continue;
    }
    document.write('<option>' + stores[i] + '</option>');
}
document.write('</select>');
