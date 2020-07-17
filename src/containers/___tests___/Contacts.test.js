import React from "react";
import { render, screen, cleanup, act, fireEvent } from "utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

import { Contacts } from "containers";

afterEach(cleanup);

it("About can render with redux with defaults", () => {
  render(<Contacts />);
  expect(screen.getByTestId("contacts-container")).toBeTruthy();
});

describe("mobile={true} show={true} expand={true} loading={true}", () => {
  beforeEach(() => {
    render(<Contacts mobile={true} show={true} expand={true} loading={true} />);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={true} show={true} expand={true} loading={false}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={true} show={true} expand={true} loading={false} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={false} show={true} expand={true} loading={true}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={false} show={true} expand={true} loading={true} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={false} show={true} expand={true} loading={false}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={false} show={true} expand={true} loading={false} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={false} show={false} expand={true} loading={true}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={false} show={false} expand={true} loading={true} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={false} show={false} expand={true} loading={false}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={false} show={false} expand={true} loading={false} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={false} show={false} expand={false} loading={true}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={false} show={false} expand={false} loading={true} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={false} show={false} expand={false} loading={false}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={false} show={false} expand={false} loading={false} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={true} show={true} expand={false} loading={true}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={true} show={true} expand={false} loading={true} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={true} show={true} expand={false} loading={false}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={true} show={true} expand={false} loading={false} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={true} show={false} expand={false} loading={true}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={true} show={false} expand={false} loading={true} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={true} show={false} expand={false} loading={false}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={true} show={false} expand={false} loading={false} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={true} show={false} expand={true} loading={true}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={true} show={false} expand={true} loading={true} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title contact-title--in-cv"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={false} show={true} expand={false} loading={true}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={false} show={true} expand={false} loading={true} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={false} show={true} expand={false} loading={false}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={false} show={true} expand={false} loading={false} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});

describe("mobile={false} show={false} expand={false} loading={false}", () => {
  beforeEach(() => {
    render(
      <Contacts mobile={false} show={false} expand={false} loading={false} />
    );
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container"
    );
  });

  it("contacts-expand class", () => {
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("contacts-expand click", () => {
    act(() => {
      fireEvent.click(screen.queryByTestId("contacts-expand"));
    });
    expect(screen.queryByTestId("contacts-expand")).toHaveClass(
      "contact-title"
    );
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("block-title")).toBeTruthy();
  });

  it("BlockTitle render", () => {
    expect(screen.queryByTestId("svg-arrow")).not.toBeTruthy();
  });

  it("loader render", () => {
    expect(screen.queryByTestId("loader")).not.toBeTruthy();
  });

  it("ContactsBase render", () => {
    expect(screen.queryByTestId("contacts-base")).not.toBeTruthy();
  });
});
