import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as Style from "./styledComponent";
import AlertMessage from "../AlertMessage";
import PayButton from "../PayButton";
import InputBox from "../InputBox";
import InputBoxSmall from "../InputBoxSmall";
import * as InlineInput from "../Inline/styledComponent";

// Pour garder une trace de mes Use
//  import { useState } from "react";
//  import { useEffect } from "react";

export default function From() {
  const date = /^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/;
  const cvc = /^[0-9]{3,4}$/;
  const amount = /^\d+(.\d{1,2})?$/;
  const cardNumber =
    /^(4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11})$/;
  const schema: yup.ObjectSchema<
    {
      email: string;
      cardNumber: string;
      expirationDate: string;
      cvc: string;
      name: string;
      amount: string;
    },
    yup.AnyObject,
    {
      email: undefined;
      cardNumber: undefined;
      expirationDate: undefined;
      cvc: undefined;
      name: undefined;
      amount: undefined;
    },
    ""
  > = yup.object().shape({
    email: yup.string().email("Email incorrect").required("Email incorrect"),
    cardNumber: yup
      .string()
      .min(16, "Numéro incorrect")
      .max(16, "Numéro incorrect")
      .matches(cardNumber, "Numéro incorrect")
      .required("Numéro manquant"),
    expirationDate: yup
      .string()
      .min(5, "Date incorrecte")
      .max(5, "Date incorrecte")
      .matches(date, "Date incorrecte")
      .required("Date manquante"),
    cvc: yup
      .string()
      .min(3, "Cryptogramme incorrect")
      .max(4, "Cryptogramme incorrect")
      .matches(cvc, "Cryptogramme incorrect")
      .required("Cryptogramme manquante"),
    name: yup
      .string()
      .min(3, "Le nom doit faire au moins 3 caractères")
      .max(30, "Le nom doit faire moins de 30 caractères")
      .required(),
    amount: yup
      .string()
      .matches(amount, "Montant incorrect")
      .required("Veuillez entrer un montant"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //  Pour garder une trace de  mon UseEffect
  //  const [backendData, setBackendData] = useState({});

  /*  useEffect(() => {
    try {
      fetch("http://localhost:5000/api")
        .then((response) => response.json())
        .then((data2) => {
          setBackendData(data2);
        });
    } catch (error) {
      console.log(error);
    }
  }, []); */

  async function onSubmit(data: any) {
    console.log(data);
    try {
      await axios.put("http://localhost:5000/DB/findByCardNumber", data);
    } catch (error: any) {
      if (error.response) {
        // la requête a été faite et le code de réponse du serveur n’est pas dans
        // la plage 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // la requête a été faite mais aucune réponse n’a été reçue
        // `error.request` est une instance de XMLHttpRequest dans le navigateur
        // et une instance de http.ClientRequest avec node.js
        console.log(error.request);
      } else {
        // quelque chose s’est passé lors de la construction de la requête et cela
        // a provoqué une erreur
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  }

  return (
    <Style.Form>
      <form onSubmit={handleSubmit(onSubmit)} action="/">
        <InputBox
          register={register}
          title="Adresse email"
          placeholder="Email"
          registerType="email"
          error={!!errors.email}
        />
        <InputBox
          register={register}
          title="Informations sur la carte"
          placeholder="1234123412341234"
          registerType="cardNumber"
          error={!!errors.cardNumber}
        />
        <InlineInput.Inline>
          <InputBoxSmall
            registerType="expirationDate"
            placeholder="MM/YY"
            register={register}
            error={!!errors.expirationDate}
          />
          <InputBoxSmall
            registerType="cvc"
            placeholder="123"
            register={register}
            error={!!errors.cvc}
          />
        </InlineInput.Inline>
        <InputBox
          register={register}
          title="Porteur de la carte"
          placeholder="Nom"
          registerType="name"
          error={!!errors.name}
        />
        <InputBox
          register={register}
          title="Montant"
          placeholder="Montant"
          registerType="amount"
          error={!!errors.amount}
        />
        <PayButton />
        <AlertMessage inputError={errors.email} />
        <AlertMessage inputError={errors.cardNumber} />
        <AlertMessage inputError={errors.expirationDate} />
        <AlertMessage inputError={errors.cvc} />
        <AlertMessage inputError={errors.name} />
        <AlertMessage inputError={errors.amount} />
      </form>
    </Style.Form>
  );
}
