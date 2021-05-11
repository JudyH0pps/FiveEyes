package com.toy.omok.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import com.toy.omok.vo.Chat;
import com.toy.omok.vo.SocketMessage;

@Controller
public class ChatController {

	@MessageMapping("/chat")
	@SendTo("/topic/chat")
	public Chat sendMessage(SocketMessage message) throws Exception{
		Thread.sleep(100);
		System.out.println("In Chat");
		return new Chat("익명: " + HtmlUtils.htmlEscape(message.getName()));
	}
	
}
