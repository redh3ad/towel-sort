
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if(arguments.length == 0) return [];
	if(matrix.length == 0) return [];

	return matrix.map((value, index) => {
		return index % 2 === 0 ? value : value.reverse();
	  }).flat(1)

  }
