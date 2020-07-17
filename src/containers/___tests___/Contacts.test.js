import React from "react";
import { screen, cleanup, act, fireEvent } from "@testing-library/react";
import { renderWithRedux } from "redux/test-utils";
import "@testing-library/jest-dom/extend-expect";

import { Contacts } from "containers";

afterEach(cleanup);

let initialState;

it("About can render with redux with defaults", () => {
  const initialState = {
    main: {
      page: 0,
      screenVersion: { mobile: false, tablet: false, desktop: false },
    },
    contacts: { items: [{}, {}], loading: true },
  };
  renderWithRedux(<Contacts />, initialState);
  expect(screen.getByTestId("contacts-container")).toBeTruthy();
});

describe("mobile={true} show={true}", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={true} show={true} />, initialState);
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

describe("mobile={true} show={false}", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={true} show={false} />, initialState);
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

describe("mobile={false} show={true}", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={false} show={true} />, initialState);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--reverse-animation"
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

describe("mobile={false} show={false}", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={false} show={false} />);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--animation"
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

describe("mobile={true} show={true} 1", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={true} show={true} />, initialState);
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

describe("mobile={true} show={false} 1", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={true} show={false} />, initialState);
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

describe("mobile={false} show={true} 1", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={false} show={true} />, initialState);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--reverse-animation"
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

describe("mobile={false} show={false} 1", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={false} show={false} />);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--animation"
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

describe("mobile={true} show={true} 2", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={true} show={true} />, initialState);
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

describe("mobile={true} show={false} 2", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={true} show={false} />, initialState);
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

describe("mobile={false} show={true} 2", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={false} show={true} />, initialState);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--reverse-animation"
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

describe("mobile={false} show={false} 2", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={false} show={false} />);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--animation"
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

describe("mobile={true} show={true} 3", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={true} show={true} />, initialState);
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

describe("mobile={true} show={false} 3", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={true} show={false} />, initialState);
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

describe("mobile={false} show={true} 3", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={false} show={true} />, initialState);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--reverse-animation"
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

describe("mobile={false} show={false} 3", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={false} show={false} />);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--animation"
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

describe("mobile={true} show={true} 4", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={true} show={true} />, initialState);
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

describe("mobile={true} show={false} 4", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={true} show={false} />, initialState);
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

describe("mobile={false} show={true} 4", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={false} show={true} />, initialState);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--reverse-animation"
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

describe("mobile={false} show={false} 4", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={false} show={false} />);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--animation"
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

describe("mobile={true} show={true} 5", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={true} show={true} />, initialState);
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

describe("mobile={true} show={false} 5", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={true} show={false} />, initialState);
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

describe("mobile={false} show={true} 5", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={false} show={true} />, initialState);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--reverse-animation"
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

describe("mobile={false} show={false} 5", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 1,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={false} show={false} />);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--animation"
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

describe("mobile={true} show={true} 6", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={true} show={true} />, initialState);
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

describe("mobile={true} show={false} 6", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={true} show={false} />, initialState);
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

describe("mobile={false} show={true} 6", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={false} show={true} />, initialState);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--reverse-animation"
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

describe("mobile={false} show={false} 6", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={false} show={false} />);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--animation"
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

describe("mobile={true} show={true} 7", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={true} show={true} />, initialState);
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

describe("mobile={true} show={false} 7", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={true} show={false} />, initialState);
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

describe("mobile={false} show={true} 7", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={false} show={true} />, initialState);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--reverse-animation"
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

describe("mobile={false} show={false} 7", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: true,
      },
      contacts: { items: [{}, {}], loading: true },
    };
    renderWithRedux(<Contacts mobile={false} show={false} />);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--animation"
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

describe("mobile={true} show={true} 8", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={true} show={true} />, initialState);
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

describe("mobile={true} show={false} 8", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={true} show={false} />, initialState);
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

describe("mobile={false} show={true} 8", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={false} show={true} />, initialState);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--reverse-animation"
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

describe("mobile={false} show={false} 8", () => {
  beforeEach(() => {
    initialState = {
      main: {
        page: 0,
        lowHeightVersion: false,
      },
      contacts: { items: [{}, {}], loading: false },
    };
    renderWithRedux(<Contacts mobile={false} show={false} />);
  });

  it("container class", () => {
    expect(screen.queryByTestId("contacts-container")).toHaveClass(
      "contacts-container box contacts-container--animation"
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
