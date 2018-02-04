'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Слова только в нижнем регистре', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			['барокко', 'коробка'],
			['кот', 'ток'],
			['липа', 'пила'],
			['пост', 'стоп']
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Слова только в верхнем регистре', function (assert) {
		const input = [
			'КОТ', 'ПИЛА', 'БАРОККО',
			'СТОП', 'ТОК', 'КОШКА',
			'ЛИПА', 'КОРОБКА', 'ПОСТ'
		];

		const output = [
			['БАРОККО', 'КОРОБКА'],
			['КОТ', 'ТОК'],
			['ЛИПА', 'ПИЛА'],
			['ПОСТ', 'СТОП']
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Слова в смешанном регистре', function (assert) {
		const input = [
			'КоТ', 'пИлА', 'БАроКкО',
			'СТОП', 'ток', 'кошка',
			'ЛИПА', 'КОРОБКА', 'пост'
		];

		const output = [
			['БАроКкО', 'КОРОБКА'],
			['КоТ', 'ток'],
			['ЛИПА', 'пИлА'],
			['СТОП', 'пост']
		];

		assert.deepEqual(anagram(input), output, "anagram('КоТ', 'пИлА', 'БАроКкО', 'СТОП', 'ток', 'кошка', 'ЛИПА', 'КОРОБКА', 'пост') == [['БАроКкО', 'КОРОБКА'], ['КоТ', 'ток'], ['ЛИПА', 'пИлА'], ['СТОП', 'пост']]");
	});
});
