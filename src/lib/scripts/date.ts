import { DateTime } from 'luxon';

const getYear = (): number => {
	return DateTime.now().year;
};

export { getYear };