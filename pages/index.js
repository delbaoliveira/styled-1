import css from "styled-jsx/css"
import { paddingStrExternal } from "../lib/external"

const paddingInt = 10
const paddingStr = "10"

// ✅ babel
// ❌ swc
const Test1 = () => (
  <div>
    <p>test 1</p>
    <style jsx>{styles1}</style>
  </div>
)

const styles1 = css`
  p {
    color: red;
  }

  .something-else {
    padding: ${paddingInt}px;
  }
`

// ✅ babel
// ✅ swc
const Test2 = () => (
  <div>
    <p>test 2</p>
    <style jsx>{`
      p {
        color: red;
      }

      .something-else {
        padding: ${paddingInt}px;
      }
    `}</style>
  </div>
)

// ✅ babel
// ✅ swc
const Test3 = () => (
  <div>
    <p className={styles3.className}>test 3</p>
    {styles3.styles}
  </div>
)

const styles3 = css.resolve`
  p {
    color: red;
  }

  .something-else {
    padding: ${paddingInt}px;
  }
`

// ✅ babel
// ✅ swc
const Test4 = () => (
  <div>
    <p>test 4</p>
    <style jsx>{styles4}</style>
  </div>
)

const styles4 = css`
  p {
    color: red;
  }

  .something-else {
    padding: ${paddingStr}px;
  }
`

// ✅ babel
// ✅ swc
const Test5 = () => (
  <div>
    <p>test 5</p>
    <style jsx>{`
      p {
        color: red;
      }

      .something-else {
        padding: ${paddingStr}px;
      }
    `}</style>
  </div>
)

// ✅ babel
// ✅ swc
const Test6 = () => (
  <div>
    <p className={styles6.className}>test 6</p>
    {styles6.styles}
  </div>
)

const styles6 = css.resolve`
  p {
    color: red;
  }

  .something-else {
    padding: ${paddingStr}px;
  }
`

// ✅ babel
// ❌ swc
const Test7 = () => (
  <div>
    <p>test 7</p>
    <style jsx>{styles7}</style>
  </div>
)

const styles7 = css`
  p {
    color: red;
  }

  .something-else {
    padding: ${paddingStrExternal}px;
  }
`

// ✅ babel
// ✅ swc
const Test8 = () => (
  <div>
    <p>test 8</p>
    <style jsx>{`
      p {
        color: red;
      }

      .something-else {
        padding: ${paddingStrExternal}px;
      }
    `}</style>
  </div>
)

// ✅ babel
// ✅ swc
const Test9 = () => (
  <div>
    <p className={styles9.className}>test 9</p>
    {styles9.styles}
  </div>
)

const styles9 = css.resolve`
  p {
    color: red;
  }

  .something-else {
    padding: ${paddingStrExternal}px;
  }
`

export default function Page() {
  return (
    <div>
      <Test1 />
      <Test2 />
      <Test3 />
      <Test4 />
      <Test5 />
      <Test6 />
      <Test7 />
      <Test8 />
      <Test9 />
    </div>
  )
}
