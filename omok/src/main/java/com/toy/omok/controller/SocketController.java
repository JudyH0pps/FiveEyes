package com.toy.omok.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import com.toy.omok.vo.Chat;
import com.toy.omok.vo.SocketMessage;
import com.toy.omok.vo.Stone;

@Controller
public class SocketController {

	@MessageMapping("/chat")
	@SendTo("/topic/chat")
	public Chat sendMessage(SocketMessage message) throws Exception{
		Thread.sleep(100);
		return new Chat("익명: " + HtmlUtils.htmlEscape(message.getName()));
	}
	
	@MessageMapping("/stone")
	@SendTo("/topic/stone")
	public Stone sendStone(SocketMessage message) throws Exception{
		Thread.sleep(100);
		return new Stone("" + HtmlUtils.htmlEscape(message.getName()));
	}
}
