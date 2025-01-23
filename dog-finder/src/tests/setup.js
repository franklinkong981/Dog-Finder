import {afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';


//runs a clean after each test case (ex. clearing jsdom)
afterEach(() => {
  cleanup();
});
