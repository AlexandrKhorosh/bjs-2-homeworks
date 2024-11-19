function getArrayParams(...arr) {
  if (arr.length === 0) {
		return 0;
	}

	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
		return 0;
	}

	sum = 0

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}

	return sum
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let avg = max - min;

	return avg
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      return 0;
    } else if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  let avg = sumEvenElement - sumOddElement

  return avg;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0
	let countEvenElement = 0

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++
		}
	}
	if (countEvenElement === 0) {
		return 0;
	}

	let avg = sumEvenElement / countEvenElement

	return avg
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}