import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('milk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('meal');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('apple');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('banana');
  await page.getByTestId('text-input').press('Enter');
  await expect(page.getByTestId('todo-list')).toContainText('banana');
  await expect(page.getByTestId('todo-list')).toContainText('apple');
  await expect(page.getByTestId('todo-list')).toContainText('meal');
  await expect(page.getByTestId('todo-list')).toContainText('milk');
});