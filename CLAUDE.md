# Project: my-app

## Tech Stack
- Expo SDK 54, React Native 0.81, React 19.1
- expo-router ~6.0 (file-based routing)
- @react-navigation 7.x
- TypeScript ~5.9
- Package manager: pnpm

## App Structure
```
app/
├── _layout.tsx              # Root Stack (headerShown: false)
└── (tabs)/
    ├── _layout.tsx          # Tabs layout (Ionicons for icons)
    ├── index.tsx            # Home tab
    └── about/
        ├── _layout.tsx      # Required for folder-based tab route
        └── index.tsx        # About tab
```

## Routing Rules (Expo Router)
- `(parentheses)` = group, URL 경로에 포함되지 않음. 이름은 무관
- `_prefix` = 라우팅에서 제외됨
- 폴더 기반 탭 사용 시 반드시 `_layout.tsx` 필요 (없으면 `folder/index`로 인식됨)
- `Tabs.Screen name`은 폴더명과 일치해야 함 (예: `name="about"`)
- `app/index.tsx` 없으면 unmatched route 에러 발생 → `(tabs)` 안에 `index.tsx` 필요

## TODO
- [ ] Expo Modules API로 네이티브 모듈 생성 (`npx create-expo-module@latest --local`)
  - 백그라운드 스레드에서 무거운 계산 처리용
  - Swift: AsyncFunction 사용, Kotlin: Dispatchers.Default + withContext