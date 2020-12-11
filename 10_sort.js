// sort sorterar en array enligt bubblesort. Den tar en funktion som i sin tur tar två argument a och b. Om den funktionen returnerar större än 0 sorteras b till ett index lägre än a.
//om sort returner 0 låter de de vara. OM sort returnerar mindre än 0 sorteras a till ett index kägre än b.

const arr = [1,5,4,7,1];
console.log(arr.sort()); //[ 1, 1, 4, 5, 7 ]