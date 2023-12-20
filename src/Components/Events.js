import React, { useEffect, useState, useRef } from "react";
import Container from "./UI/Container";

const Events = () => {
  const FirstEvent = () => {
    const [value, setValue] = useState("");
    const [show, setShow] = useState("changeMe");

    const handleAdd = () => {
      setShow(value);
      setValue("");
    };

    return (
      <>
        <span>{show}</span>
        <input
          type="text"
          className="border p-3"
          placeholder="Text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleAdd}>+ change</button>
      </>
    );
  };

  const SecondEvent = () => {
    const [person, setPerson] = useState({
      id: 0,
      personName: "",
      personAge: "",
    });
    const [data, setData] = useState([]);
    const changeHandler = (e) => {
      const { name, value } = e.target;
      setPerson((prevPerson) => ({
        ...prevPerson,
        [name]: value,
      }));
    };

    const submitHandler = (e) => {
      e.preventDefault();
      localStorage.setItem("key", [data]);
      if (person.personName === "" && person.personAge === "") {
        alert("Please enter Your Name and Age");
      } else {
        person.id++;
        setData((prevData) => [...prevData, person]);
        setPerson({ personName: "", personAge: "" });
        console.log(person.id);
      }
    };
    const handleDelete = () => {
      setData(data.filter((d) => d.index !== person.index));
    };
    return (
      <>
        <form
          onSubmit={submitHandler}
          className="flex items-center justify-center flex-col gap-y-5"
        >
          <input
            type="text"
            name="personName"
            className="border p-3"
            value={person.personName}
            onChange={changeHandler}
            placeholder="Name"
          />
          <input
            type="date"
            name="personAge"
            className="border p-3"
            value={person.personAge}
            onChange={changeHandler}
          />
          <button type="submit">Submit</button>
        </form>

        <div>
          <h2>Stored Data:</h2>
          <ul>
            {data.map((item, index) => (
              <li key={item}>
                Name: {item.personName}, Date: {item.personAge}, Index: {index}
                <button onClick={handleDelete}>delete</button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };
  const ThirdEvent = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const divRef = useRef(null);

    const handleMouseMove = (e) => {
      const { left, top } = divRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      setMousePosition({ x, y });
    };

    useEffect(() => {
      const div = divRef.current;
      div.addEventListener("mousemove", handleMouseMove);

      return () => {
        div.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
    let formattedX = (Math.floor(mousePosition.x));
    let formattedy = (Math.floor(mousePosition.y));
    return (
      <>
        <div
          className="w-[350px] h-[350px] border flex items-center justify-center cursor-crosshair"
          ref={divRef}
        >
          <span className="mx-3">x:{formattedX}px</span>
          <span className="mx-3">y:{formattedy}px</span>
        </div>
      </>
    );
  };

  return (
    <>
      <Container className=" text-gray-500 flex items-start justify-center flex-col gap-y-5">
        <div className=" mx-auto flex items-center justify-center flex-col gap-y-3">
          <span className="font-semibold">Working with Event 1</span>
          <FirstEvent />
        </div>
        <div className="border-b w-full"></div>
        <div className="mx-auto flex items-center justify-center flex-col gap-y-3">
          <span className="font-semibold">Working with Event 2</span>
          <SecondEvent />
        </div>
        <div className="border-b w-full"></div>
        <div className="mx-auto flex items-center justify-center flex-col gap-y-3">
          <span className="font-semibold">Working with Event 3</span>
          <ThirdEvent />
        </div>
      </Container>
    </>
  );
};

export default Events;
