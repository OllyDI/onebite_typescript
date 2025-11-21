// enum 타입 -> 여러가지 값들에 이름을 부여해 열거해두고 사용
enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: 'test1',
  role: Role.ADMIN,
  Language: Language.korean
}

const user2 = {
  name: 'test2',
  role: Role.USER
}

const user3 = {
  name: 'test3',
  role: Role.GUEST
}

console.log(user1, user2, user3);