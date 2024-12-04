"use client";

import {
  AiGenerate,
  RightPanelClose,
  SettingsAdjust,
} from "@carbon/icons-react";
import {
  AILabel,
  Button,
  Column,
  Content,
  Grid,
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  Stack,
  // HeaderPanel,
  Theme,
  Tooltip,
} from "@carbon/react";

export default function Chat01() {
  return (
    <div className="bg-blue-10 w-full h-screen">
      <Theme theme="g10">
        <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="IBM">
            [Platform]
          </HeaderName>

          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenuItem href="#">Experience</HeaderMenuItem>
            <HeaderMenuItem href="#">How it works</HeaderMenuItem>
            <HeaderMenuItem href="#">IBM Innovation Studio</HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Notifications"
              // isActive
              // onClick={action("notification click")}
            >
              <AiGenerate size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              isActive
              // onClick={action("app-switcher click")}
              tooltipAlignment="end"
            >
              <SettingsAdjust size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>

        <Content
          id="main-content"
          className="bg-blue-20"
          style={{ height: "calc(100vh - 47px)" }}
        >
          <Grid narrow className="h-full">
            <Column
              sm={4}
              md={8}
              lg={11}
              className="bg-white rounded-3xl h-full"
            >
              <div className="h-full w-full flex ">
                <div className="border-r border-solid border-gray-30">
                  <Tooltip label="Open">
                    <Button
                      kind="ghost"
                      aria-label="Open Traditional Assistant"
                      hasIconOnly
                      renderIcon={() => <RightPanelClose size={16} />}
                      iconDescription="Open"
                    />
                  </Tooltip>
                </div>
                <div className="h-full w-full">
                  <div className="flex items-center justify-end border-b border-solid border-gray-30 p-4">
                    <AILabel />
                  </div>
                </div>
              </div>
            </Column>
            <Column sm={4} md={8} lg={5} className="bg-white rounded-3xl">
              <div className="p-6">
                <h2 className="font-fluid-heading-04">
                  Conversational Intelligence
                </h2>
                <hr className="my-4 text-gray-30" />

                <Stack gap={6}>
                  <div>
                    <h3 className="font-heading-compact-01">Summary</h3>
                    <p className="font-body-02">
                      User inquiries about home improvement permit, faces system
                      outage, and considers relocation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading-compact-01">
                      Remediation Steps
                    </h3>
                    <p className="font-body-02">No action required.</p>
                  </div>
                  <div>
                    <h3 className="font-heading-compact-01">Customer Intent</h3>
                    <p className="font-body-02">Building Permit [90%]</p>
                  </div>
                  <div>
                    <h3 className="font-heading-compact-01">
                      Fraud Likelihood
                    </h3>
                    <p className="font-body-02">Low [10%]</p>
                  </div>
                  <div>
                    <h3 className="font-heading-compact-01">Sentiment</h3>
                    <p className="font-body-02">Neutral [50%]</p>
                  </div>
                </Stack>
              </div>
            </Column>
          </Grid>
        </Content>
      </Theme>
    </div>
  );
}
