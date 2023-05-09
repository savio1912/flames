import Result from "./Result";

const Flames = (props) => {
  function Unique_Count(name1, name2) {
    name1 = name1.toLowerCase().replace(/\s/g, "");
    name2 = name2.toLowerCase().replace(/\s/g, "");
    let n1 = (name1.match(/ /g) || []).length;
    let n2 = (name2.match(/ /g) || []).length;
    name1 = name1.replace(/\s/g, "").substring(0, name1.length - n1);
    name2 = name2.replace(/\s/g, "").substring(0, name2.length - n2);
    let name1_count = {};
    let name2_count = {};
    let Count = 0;
    for (let ch of name1) {
      name1_count[ch] = (name1_count[ch] || 0) + 1;
    }
    for (let ch of name2) {
      if (name1_count[ch] !== undefined && name1_count[ch] !== 0) {
        name1_count[ch]--;
      } else {
        name2_count[ch] = (name2_count[ch] || 0) + 1;
      }
    }
    for (let key in name1_count) {
      Count += name1_count[key];
    }
    for (let key in name2_count) {
      Count += name2_count[key];
    }
    return Count;
  }

  function flames(Count) {
    let f = "FLAMES";
    let Size = f.length;
    let i = 0;
    while (f.length > 1) {
      let rem = (i + Count) % Size;
      if (rem === 0) {
        f = f.substring(0, f.length - 1);
        i = 0;
      } else {
        f = f.substring(0, rem - 1) + f.substring(rem);
        i = rem - 1;
      }
      Size = f.length;
    }
    return f[0];
  }

  let { name1, name2 } = props;
  const count = Unique_Count(name1, name2);
  const ch = flames(count);

  return (
    <>
      <h1>Result</h1>
      <Result result={ch} />
    </>
  );
};
export default Flames;
