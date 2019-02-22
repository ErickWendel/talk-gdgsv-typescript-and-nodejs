npm init -y
npm i -D typescript
npx typescript --init
mv calc.js calc.ts
npx tsc

node build/calc.js