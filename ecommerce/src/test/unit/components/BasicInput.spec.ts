import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput.vue";
interface Props {
  label: string;
  placeholder: string;
  type: string;
  minLength: number;
  maxLength: number;
}
describe("BaseInput", () => {
  it("Given props, input data display properly", () => {
    const inputProps = {
      label: "Login",
      placeholder: "Login",
      type: "text",
      minLength: 4,
      maxLength: 20,
      name: "login",
    };
    const wrapper = mount(BaseInput, { props: inputProps });
    expect(wrapper.find("#base-input-id-test")).toBeTruthy();
    expect(wrapper.find("#base-input-label-id-test").text()).toBe("Login");
    expect(wrapper.find("#base-input-id-test").attributes().type).toBe("text");
    expect(wrapper.find("#base-input-id-test").attributes().name).toBe("login");
    expect(wrapper.find("#base-input-id-test").attributes().placeholder).toBe(
      "Login"
    );
  });
  it("", () => {});
});
