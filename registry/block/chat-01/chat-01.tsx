"use client";

import {
  AiGenerate,
  ChevronLeft,
  ChevronRight,
  IbmWatsonDiscovery,
  RightPanelClose,
  SettingsAdjust,
  View,
} from "@carbon/icons-react";
import {
  AILabel,
  AILabelContent,
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
  Theme,
  Tooltip,
} from "@carbon/react";
import ButtonPill from "@registry/ui/button-pill";
import { ChatContainer, ChatMessage } from "./chat";

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
                    <AILabel>
                      <AILabelContent>
                        <h3 className="font-heading-04">Powered by WatsonX</h3>
                        <p className="font-body-02">
                          Lorem ipsum dolor sit amet consectetur. Eu dui sem
                          mauris id et mauris nisl rutrum at. Nullam suspendisse
                          netus in enim nec aliquam. Amet pharetra libero leo
                          neque accumsan. Mauris pulvinar sollicitudin tempus
                          ornare curabitur montes libero erat.
                        </p>
                      </AILabelContent>
                    </AILabel>
                  </div>

                  <ChatContainer>
                    <ChatMessage
                      title="watsonx 10:10 AM"
                      icon={<IbmWatsonDiscovery size={24} />}
                    >
                      <p className="font-body-02">
                        Based on the information provided in the documents, hail
                        damage to your car is generally not covered under the
                        automobile coverage for damage section. This is because
                        hail is typically classified as a non-collision related
                        incident. The policy specifically lists
                        collision-related damage as something that is covered.
                      </p>
                    </ChatMessage>
                    <ChatMessage
                      alignRight
                      title="watsonx 10:10 AM"
                      icon={<IbmWatsonDiscovery size={24} />}
                    >
                      <p className="font-body-02">
                        Based on the information provided in the documents, hail
                        damage to your car is generally not covered under the
                        automobile coverage for damage section. This is because
                        hail is typically classified as a non-collision related
                        incident. The policy specifically lists
                        collision-related damage as something that is covered.
                      </p>
                    </ChatMessage>
                  </ChatContainer>
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
                  <div className="flex justify-between">
                    <ButtonPill renderIcon={ChevronLeft} leftAlignIcon>
                      Preview
                    </ButtonPill>
                    <ButtonPill renderIcon={ChevronRight}>Next</ButtonPill>
                  </div>
                  <Button renderIcon={View}>View details</Button>
                </Stack>
              </div>
            </Column>
          </Grid>
        </Content>
      </Theme>
    </div>
  );
}
