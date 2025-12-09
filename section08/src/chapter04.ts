/**
 * 탬플릿 리터럴 타입
 */

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

// 두 타입을 조합해서 알아서 만들어줌
type ColorAnimal = `${Color}-${Animal}`;